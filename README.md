# Class Planning Application Backend

This is the backend service for the class planning application that allows users to plan their classes over a period of 9 months (July to March) with weekly topic planning and Gantt chart generation.

## Docker Setup (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system.

2. Build and run the application using Docker Compose:
```bash
docker-compose up --build
```

The backend API will be available at http://localhost:8000

To stop the application:
```bash
docker-compose down
```

## Manual Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:
```bash
python main.py
```

The backend server will run on http://localhost:8000

## API Endpoints

1. Create a new plan:
```
POST /api/plans
```

2. Get all plans:
```
GET /api/plans
```

3. Get a specific plan:
```
GET /api/plans/{plan_id}
```

4. Generate Gantt chart:
```
POST /api/generate-gantt
```

## Example Plan Structure

```json
{
  "start_month": "July",
  "end_month": "March",
  "monthly_plans": [
    {
      "month": "July",
      "weeks": [
        {
          "week_number": 1,
          "topics": ["Topic 1", "Topic 2"]
        },
        {
          "week_number": 2,
          "topics": ["Topic 3", "Topic 4"]
        }
      ]
    }
  ]
}
```

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (requires Node.js 16+ and npm):
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend will run on http://localhost:3000 and will proxy API requests to the backend.

## Dashboard (Pie Chart for Centres)

A dashboard feature with a pie chart showing the distribution of plans by centre is planned but not currently implemented in the codebase. When available, it will visualize the number of plans per centre using data from the backend.

## Features

- Plan classes for 9 months (July to March)
- Weekly topic planning
- Generate Gantt chart visualization
- Download Gantt chart as PNG image
- RESTful API endpoints for plan management
- Dockerized application for easy deployment
- **Planned:** Dashboard with pie chart for centres 