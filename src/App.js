import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import SCOrderSummary from './CreateSCOrder/SCOrderSummary'

function App() {


const [apiResponse, setApiResponse] = useState([''])
const [showModal, setShowModal] = useState(false)
const [ticker, setTicker] = useState(0)



function callAPI() {
    fetch("http://localhost:9000/API")
        .then(res => res.text())
        .then(res => setApiResponse(JSON.parse(res)))
        .then(setShowModal(true))
}

function callTicker() {
  fetch("http://localhost:9000/ticker")
  .then(res => res.text())
  .then(res => setTicker(JSON.parse(res)), 30000)
  
}



function closeModalHandler() {
setShowModal(false)
}

function condition() {
  if (Object.values(apiResponse).length===8) {
   return true
  } else {    
   return false    
  }
}

const [range, setRange] = useState(25)


  
  return (
    
    <div className="App">
      {/* {callTicker()} */}
     <img src={logo} alt="logo" id="logo" className="logo"></img>
     <p>How much do you wish to pay ?</p>
     <input type="range" id="rangeSlider" value={range} onChange={(e) => setRange(e.target.value)} className="range"></input>
     <button className="payButton" onClick={callAPI} >Pay {range} $</button>
     <button className="payButton" onClick={callTicker} >ticker </button>

     {/* {console.log('api response type: '+typeof apiResponse+ ' value: '+apiResponse)}
     {console.log(Object.values(apiResponse))} */}
        {console.log(Object.values(ticker))}
   
<SCOrderSummary 
show={showModal}
clicked={closeModalHandler}
responseData = {Object.values(apiResponse)}
closeModalHandler = {closeModalHandler}
isTestOrder = {condition()}
/>
    </div>
  );
}

export default App;
