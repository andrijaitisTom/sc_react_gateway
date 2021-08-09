const axios = require("axios");





        module.exports.ticker = async function () {


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

            try {
               const res = await axios.get(
                    "https://spectrocoin.com/scapi/ticker/"+currencyFrom.BTC+"/"+currencyTo.EUR,
                    {headers: headers}
                  )
                 if(res.status == 200){
                     tickerData = res.data;
                     console.log(tickerData)
                  return tickerData 
                 }    
             }
             catch (err) {
                 console.error(err);
             }
    }



    