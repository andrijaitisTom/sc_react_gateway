import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'
// import createOrder from './Order'; 
import SCOrderSummary from './CreateSCOrder/SCOrderSummary'

function App() {


const [apiResponse, setApiResponse] = useState([''])
const [showModal, setShowModal] = useState(false)


function callAPI() {
    fetch("http://localhost:9000/API")
        .then(res => res.text())
        .then(res => setApiResponse(JSON.parse(res)))
        .then(setShowModal(true))
}



const [range, setRange] = useState(25)
  
  return (
    <div className="App">
     <img src={logo} alt="logo" id="logo" className="logo"></img>
     <p>How much do you wish to pay ?</p>
     <input type="range" id="rangeSlider" value={range} onChange={(e) => setRange(e.target.value)} className="range"></input>
     <button className="payButton" onClick={callAPI} >Pay {range} $</button>
     {console.log('api response type: '+typeof apiResponse+ ' value: '+apiResponse)}
     {console.log(Object.values(apiResponse))}

<SCOrderSummary 
show={showModal}
responseData = {Object.values(apiResponse)}
/>
    </div>
  );
}

export default App;
