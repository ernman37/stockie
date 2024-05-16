from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/stock/{ticker}")
async def stock(ticker):
    data = yf.Ticker(ticker)
    candles = data.history(period="1mo")
    print(candles)
    return {"message": ticker}

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)