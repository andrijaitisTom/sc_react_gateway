import React , { useState }  from 'react'
import logo from './logo.svg';
import './App.css';
import createScMerchantOrder from './createScMerchantOrder';


// function handleRange() {
// }

function App() {
  const [range, setRange] = useState(50)

console.log(range)

  return (
      <div>
   <div className="theLogo">
      <img alt="logo" src={logo} />
    </div>
     
 <p className="question">How much would you like to pay ? </p>

<div className="slidercontainer">
<input type="range" min="1" max="100" value={range} className="slider" onChange={(e) => setRange(e.target.value)}  id="rangeSlider"></input>
</div>

<button type="submit" id="submitButton">Pay {range} $</button>



</div>


  );
}

export default App;
