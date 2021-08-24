import React, {useState} from 'react'
import useInterval from '../useInterval'

const Timer = (props) => {

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }
  
  let nowEpoch = new Date()
  let timeLeftEpoch = props.finishTime-nowEpoch
  let showTimeLeft = timeLeftEpoch/1000
    const [time, setTime] = useState(showTimeLeft)

useInterval(function(){ 
    const newTime = showTimeLeft
    if(time>0){
        setTime(newTime-1)
    }else setTime('EXPIRED')
 }, 1000);


//  const epochToTime = new Date(time*1000) 
  

        return (secondsToHms(time))
        
    }

export default Timer    