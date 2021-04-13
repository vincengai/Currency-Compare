fetch("https://share-count1.p.rapidapi.com/api/v1/articles/share_counts", {
  method: "POST",
  headers: {
    "x-rapidapi-host": "share-count1.p.rapidapi.com",
    "x-rapidapi-key": "1b60aac88fmsh165d82fed056bc9p1bd72cjsn0c7ac4b0aef3",
    "content-type": "application/json",
    accept: "application/json"
  },
  body: {
    query: {
      urls: [
        "https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch",
        "https://www.marketwatch.com/investing/stock/aapl",
        "https://money.cnn.com/quote/quote.html?symb=AAPL",
        "https://www.nyse.com/quote/XNGS:AAPL",
        "https://www.nasdaq.com/market-activity/stocks/aapl"
      ]
    }
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });