import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'
// import createOrder from './Order'; 

function App() {


const [apiResponse, setApiResponse] = useState('')



function callAPI() {
    fetch("http://localhost:9000/API")
        .then(res => res.text())
        .then(res => setApiResponse(res));
}




const [range, setRange] = useState(25)
  
  return (
    <div className="App">
     <img src={logo} alt="logo" id="logo" className="logo"></img>
     <p>How much do you wish to pay ?</p>
     <input type="range" id="rangeSlider" value={range} onChange={(e) => setRange(e.target.value)} className="range"></input>
     <button className="payButton" onClick={callAPI} >Pay {range} $</button>
     <p className="App-intro">{apiResponse}</p>

    </div>
  );
}

export default App;
