import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import SCOrderSummary from './CreateSCOrder/SCOrderSummary'

function App() {
  const [apiResponse, setApiResponse] = useState([''])
  const [showModal, setShowModal] = useState(false)
  const [range, setRange] = useState(25.01)
  const amountToReceive = { range: range};

function postAPI() {
  fetch('http://localhost:9000/API', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    method: 'post',
    body: JSON.stringify(amountToReceive)
  }).then(res => res.text())
  .then(res => setApiResponse(JSON.parse(res)))
  .then(setShowModal(true))
}


function closeModalHandler() {
setShowModal(false)
}


function checkIfTestOrder() {
  if (Object.values(apiResponse).length===8) {
   return true
  } else {    
   return false    
  }
}


  
  return (
    
    <div className="App">
      {/* {callTicker()} */}
     <img src={logo} alt="logo" id="logo" className="logo"></img>
     <p>How much do you wish to pay ?</p>
     <input type="range" id="rangeSlider" min={0.01} value={range} step="0.01" onChange={(e) => setRange(e.target.value)} className="range"></input>
     <button className="payButton" onClick={postAPI} >Pay {range} $</button>
{/* {console.log('api response: '+apiResponse)} */}
   
<SCOrderSummary 
show={showModal}
clicked={closeModalHandler}
responseData = {Object.values(apiResponse)}
closeModalHandler = {closeModalHandler}
isTestOrder = {checkIfTestOrder()}
range={range}
/>
    </div>
  );
}

export default App;
