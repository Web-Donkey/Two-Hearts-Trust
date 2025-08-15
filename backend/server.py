from fastapi import FastAPI, APIRouter, Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


@api_router.get("/placeholder/{width}/{height}")
async def svg_placeholder(width: int, height: int, text: str | None = None, bg: str = "e5e7eb", fg: str = "6b7280"):
    """
    Generates an SVG placeholder image of given width/height.
    - text: optional overlay text. Defaults to "{width}x{height}"
    - bg: background hex (without #)
    - fg: foreground (text) hex (without #)
    """
    # Clamp values to avoid excessive memory
    width = max(10, min(width, 4000))
    height = max(10, min(height, 4000))
    label = text or f"{width}x{height}"
    # Basic font size heuristic
    font_size = max(10, min(int(min(width, height) * 0.2), 64))

    svg = f"""<?xml version='1.0' encoding='UTF-8'?>
<svg xmlns='http://www.w3.org/2000/svg' width='{width}' height='{height}' viewBox='0 0 {width} {height}'>
  <defs>
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#{bg}' stop-opacity='1'/>
      <stop offset='100%' stop-color='#{bg}' stop-opacity='0.9'/>
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill='url(#g)'/>
  <rect x='1' y='1' width='{width-2}' height='{height-2}' rx='12' ry='12' fill='none' stroke='#{fg}' stroke-width='2' opacity='0.6'/>
  <g fill='#{fg}' font-family='Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif' font-size='{font_size}' text-anchor='middle' dominant-baseline='middle' opacity='0.9'>
    <text x='{width/2}' y='{height/2}'>{label}</text>
  </g>
</svg>"""

    return Response(content=svg, media_type="image/svg+xml")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()