import json
import logging
import os
from datetime import datetime
from typing import List, Optional

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from gantt_generator import generate_gantt_chart
from pydantic import BaseModel
from recommended_topics import get_recommended_topics
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class WeekPlan(BaseModel):
    week_number: int
    topics: List[str]


class MonthPlan(BaseModel):
    month: str
    weeks: List[WeekPlan]


class ClassPlan(BaseModel):
    start_month: str
    end_month: str
    monthly_plans: List[MonthPlan]


class UserDetails(BaseModel):
    name: str
    centre_name: str
    program: str
    level: str
    duration: str
    grade: Optional[str] = None


class GanttRequest(BaseModel):
    user_details: UserDetails
    plan: ClassPlan


DATABASE_URL = os.getenv(
    "DATABASE_URL", "postgresql+asyncpg://postgres:postgres@db:5432/postgres"
)
engine = create_async_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
Base = declarative_base()


class UserPlan(Base):
    __tablename__ = "user_plans"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    centre_name = Column(String(100))
    program = Column(String(100))
    level = Column(String(100))
    duration = Column(String(100))
    plan_json = Column(Text)  # Store the plan as JSON string


# Create the table if it doesn't exist
async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


@app.on_event("startup")
async def on_startup():
    await init_db()


# In-memory storage (replace with database in production)
plans = []

# In-memory storage for user details
user_details = []


# Dependency to get DB session
async def get_db():
    async with SessionLocal() as session:
        yield session


@app.post("/api/plans")
async def create_plan(plan: ClassPlan):
    plans.append(plan)
    return {"message": "Plan created successfully", "plan": plan}


@app.get("/api/plans")
async def get_plans():
    return plans


@app.get("/api/plans/{plan_id}")
async def get_plan(plan_id: int):
    if plan_id < 0 or plan_id >= len(plans):
        raise HTTPException(status_code=404, detail="Plan not found")
    return plans[plan_id]


@app.post("/api/generate-gantt")
async def generate_gantt(plan: dict, db: AsyncSession = Depends(get_db)):
    try:
        # Extract user details from the plan dict
        name = plan.get("name", "")
        centre_name = plan.get("centre_name", "")
        program = plan.get("program", "")
        level = plan.get("level", "")
        duration = plan.get("duration", "")
        # Remove user details from the plan before storing as plan_json
        plan_for_json = {
            k: v
            for k, v in plan.items()
            if k not in ["name", "centre_name", "program", "level", "duration", "grade"]
        }
        user_plan = UserPlan(
            name=name,
            centre_name=centre_name,
            program=program,
            level=level,
            duration=duration,
            plan_json=json.dumps(plan_for_json),
        )
        db.add(user_plan)
        await db.commit()
        logger.info("Generating Gantt chart...")
        chart_path = generate_gantt_chart(plan_for_json)
        logger.info(f"Gantt chart generated at: {chart_path}")
        return FileResponse(
            chart_path, media_type="image/png", filename="class_plan_gantt.png"
        )
    except Exception as e:
        logger.error(f"Error generating Gantt chart: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/user-details")
async def save_user_details(details: UserDetails):
    try:
        user_details.append(details)
        logger.info(f"Saved user details: {details.dict()}")
        return {"message": "User details saved successfully", "details": details}
    except Exception as e:
        logger.error(f"Error saving user details: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/user-details/duration")
async def update_user_duration(duration_data: dict):
    try:
        if not user_details:
            raise HTTPException(status_code=404, detail="No user details found")

        # Update the duration for the most recent user details
        user_details[-1].duration = duration_data["duration"]
        logger.info(f"Updated user duration: {duration_data['duration']}")
        return {
            "message": "Duration updated successfully",
            "duration": duration_data["duration"],
        }
    except Exception as e:
        logger.error(f"Error updating duration: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/user-details")
async def get_user_details():
    return user_details


@app.get("/api/recommended-topics")
async def get_topics(
    program: str, level: str, duration: str, month: str, week: str, grade: str = None
):
    try:
        topics = get_recommended_topics(program, level, duration, month, week, grade)
        return {"topics": topics}
    except Exception as e:
        logger.error(f"Error getting recommended topics: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
