import logging
import os
from datetime import datetime, timedelta
from typing import Dict, List

import plotly.figure_factory as ff

logger = logging.getLogger(__name__)


def get_first_saturday(year: int, month: int) -> datetime:
    d = datetime(year, month, 1)
    while d.weekday() != 5:  # 5 = Saturday
        d += timedelta(days=1)
    return d


def get_year_for_month(month: str) -> int:
    months_2025 = ["July", "August", "September", "October", "November", "December"]
    if month in months_2025:
        return 2025
    else:
        return 2026


def month_str_to_number(month: str) -> int:
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    return months.index(month) + 1


def generate_gantt_chart(plan_data: Dict) -> str:
    try:
        tasks = []
        for month_plan in plan_data["plan"]["monthly_plans"]:
            month = month_plan["month"]
            year = get_year_for_month(month)
            month_num = month_str_to_number(month)
            logger.info(f"Processing {month} {year}")
            first_saturday = get_first_saturday(year, month_num)
            logger.info(f"First Saturday for {month} {year}: {first_saturday}")
            for week in month_plan["weeks"]:
                week_num = week["week_number"]
                topics = week["topics"]
                week_start = first_saturday + timedelta(days=(week_num - 1) * 7)
                week_end = week_start + timedelta(days=6)
                for topic in topics:
                    tasks.append(
                        dict(
                            Task=topic,
                            Start=week_start,
                            Finish=week_end,
                            Resource=month,
                        )
                    )
        if not tasks:
            logger.warning("No tasks found in the plan data")
            fig = ff.create_gantt(
                [
                    dict(
                        Task="Please add topics to generate a Gantt chart",
                        Start=datetime(2025, 7, 5),
                        Finish=datetime(2025, 7, 11),
                        Resource="Message",
                    )
                ],
                colors={"Message": "rgb(211, 47, 47)"},
                index_col="Resource",
                show_colorbar=False,
                group_tasks=True,
                showgrid_x=False,
                showgrid_y=False,
            )
            fig.update_layout(
                title="No Topics Added",
                xaxis_title="",
                yaxis_title="",
                height=200,
                width=800,
                showlegend=False,
            )
            fig.update_xaxes(showticklabels=False, showgrid=False)
            fig.update_yaxes(showticklabels=False, showgrid=False)
            fig.write_image("gantt_chart.png")
            return "gantt_chart.png"
        logger.info(f"Created {len(tasks)} tasks for Gantt chart")
        colors = {
            "July": "rgb(46, 137, 205)",
            "August": "rgb(114, 44, 121)",
            "September": "rgb(198, 47, 105)",
            "October": "rgb(58, 149, 136)",
            "November": "rgb(107, 127, 135)",
            "December": "rgb(241, 92, 23)",
            "January": "rgb(246, 36, 89)",
            "February": "rgb(255, 193, 7)",
            "March": "rgb(0, 150, 136)",
        }
        logger.info("Creating Gantt chart figure...")
        fig = ff.create_gantt(
            tasks,
            colors=colors,
            index_col="Resource",
            show_colorbar=True,
            group_tasks=True,
            showgrid_x=True,
            showgrid_y=True,
        )
        fig.update_layout(
            title="Class Planning Gantt Chart",
            xaxis_title="Timeline",
            yaxis_title="Topics",
            height=len(tasks) * 30 + 200,  # Adjust height based on number of tasks
            width=1200,
        )
        output_dir = os.path.dirname("gantt_chart.png")
        if output_dir and not os.path.exists(output_dir):
            os.makedirs(output_dir)
        logger.info("Saving Gantt chart as image...")
        fig.write_image("gantt_chart.png")
        logger.info("Gantt chart saved successfully")
        return "gantt_chart.png"
    except Exception as e:
        logger.error(f"Error in generate_gantt_chart: {str(e)}", exc_info=True)
        raise
