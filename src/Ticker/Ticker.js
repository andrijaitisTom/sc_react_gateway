import React, { useState } from "react";
import useInterval from "../useInterval";

function Ticker() {
  const [ticker, setTicker] = useState([""]);

  const currencies = {
    currencyFrom: "BTC",
    currencyTo: "USD",
  };

  function postAPI() {
    fetch("http://localhost:9000/ticker", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      body: JSON.stringify(currencies),
    })
      .then((res) => res.text())
      .then((res) => setTicker(JSON.parse(res)));
    console.log("called ticker");
  }
  // postAPI()

  useInterval(() => {
    postAPI();
    return ticker;
  }, 60 * 1000);

  return <div>{ticker.last}</div>;
}
/// put the postAPI()
//inside useInterval to avoid infinite calls every few miliseconds
export default Ticker;
