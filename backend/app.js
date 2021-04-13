const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/count', (request, res) => {
  fetch("https://share-count1.p.rapidapi.com/api/v1/articles/share_counts", {
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "share-count1.p.rapidapi.com",
      "x-rapidapi-key": "1b60aac88fmsh165d82fed056bc9p1bd72cjsn0c7ac4b0aef3",
      "content-type": "application/json",
      "accept": "application/json"
    },
    "body": {
      "query": {
        "urls": [
          "https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch"
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
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
