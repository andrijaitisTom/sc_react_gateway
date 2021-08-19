const axios = require("axios");

    const headers = {
        Connection: 'Keep-Alive',
        Host: 'spectrocoin.com',
        'Content-Type': 'application/x-www-form-urlencoded',

    }
    const currencyFrom ={
        BTC:'BTC',
        XEM:'XEM',
        DASH:'DASH'
    }
    const currencyTo = {
        USD:'USD',
        EUR:'EUR',
        GBP:'GBP'
    }





   function ticker() {axios.get(
        "https://spectrocoin.com/scapi/ticker/"+currencyFrom.BTC+"/"+currencyTo.EUR,
        {headers: headers}
      )
      .then((res) => {
        console.log(res)
        console.log(res.data)

        
      })
      .catch((e) => console.log(e));
    }

    ticker()