import React , {useState } from 'react'
import useInterval from '../useInterval'

function Ticker() {
    const [ticker, setTicker] = useState([''])
    
    
    //currently this calls to ticker api and gets the price of 1eur in btc
    //got to make it call the api and send the currency pair that i want
    //get the price of the currency and multiply it by the order amount,
    //then return it from this function to the Request

const currencies = {
  currencyFrom: 'BTC',
  currencyTo: 'USD'
}

    function postAPI() {
      fetch('http://localhost:9000/ticker', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
        method: 'post',
        body: JSON.stringify(currencies)
      }).then(res => res.text())
      .then(res => setTicker(JSON.parse(res)))
      console.log('called ticker')
        }
        // postAPI()
    
    useInterval(() => {
      postAPI()
        return ticker
        }, 10*1000);
      
      return <div>{ticker.last}</div>
}
   /// put the postAPI()
 //inside useInterval to avoid infinite calls every few miliseconds
export default Ticker