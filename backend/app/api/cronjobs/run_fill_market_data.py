from fastapi_utils.tasks import repeat_every
from fastapi import APIRouter
from app.actions.market_data.add_market_data import AddMarketData

router = APIRouter(prefix="/cronjob")

@router.on_event("startup")
@repeat_every(seconds=60)
async def sample_cron():
    try:
        print("cron job is running")
        await AddMarketData().run()
    except Exception as e:
        print("error in running cronjob")