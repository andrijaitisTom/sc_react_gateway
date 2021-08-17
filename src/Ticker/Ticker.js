import React, {useState} from 'react'
import useInterval from './useInterval'

function Ticker() {
    const [ticker, setTicker] = useState(0)
    useInterval(() => {
      fetch("http://localhost:9000/ticker")
      .then(res => res.text())
      .then(res => setTicker(JSON.parse(res)))
    }, 5000)
   
    return <div>{ticker.last} {ticker.currencyFrom}</div>
  }

export default Ticker