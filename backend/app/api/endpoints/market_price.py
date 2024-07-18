from fastapi import APIRouter,Query
from typing import Optional

from app.exceptions.service_exception import ServiceException
from app.api.schema.service_response import SessionResponse
from app.actions.market_data.add_market_data import AddMarketData
from app.actions.market_data.list_market_price import ListMarketPrice 

router = APIRouter(prefix="/marketprice")

@router.post('/fill_data',tags=["market_price"])
async def fill_market_data():
    try:
        await AddMarketData().run()
        return SessionResponse(message="success !!", status=200, data={})
    except ServiceException as e:
        return SessionResponse(message=str(e), status=404, data=None)

@router.get('/', tags=["market_price"])    
async def list_market_price(
    name: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    page_limit: int = Query(20, le=100),
    ):
    try:
        prices = await ListMarketPrice(name = name,page=page,page_limit=page_limit).run()
        return prices
    except ServiceException as e:
        return SessionResponse(message=str(e), status=404, data=None)

