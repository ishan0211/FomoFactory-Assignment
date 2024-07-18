from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints.market_price import router as market_router
from app.core.database import get_db
from app.core import config
from app.api.cronjobs.run_fill_market_data import router as cronjob

APP_ENV = config.APP_ENV

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await get_db()
    return

@app.get("/service/health")
async def health():
    return {"status": "ok"}

app.include_router(router=market_router, prefix="/service")
app.include_router(router = cronjob, prefix="/service")