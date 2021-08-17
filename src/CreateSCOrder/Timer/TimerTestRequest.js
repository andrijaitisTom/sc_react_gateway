import React, {useState} from 'react'
import useInterval from '../../Ticker/useInterval';


// console.log('now= '+Date.now())
const now = new Date()
const secondsSinceEpoch = Math.round(now.getTime() / 1000)

// function splitTime(timeStamp) {
//     let stampToNumber =Number(timeStamp);
// let date = new Date(stampToNumber)
// let dateToString = date.toString()
// let time = dateToString.split(" ")

// return dateToString

// }

function TimerTestRequest(props) {


    
    // console.log(props.timeStamp)
    const stamp = (Number(props.timeStamp))
    let time= (stamp-now)/1000
    const [valid, setValid] = useState(time)


// console.log(now,stamp,time/1000)
// console.log(new Date(time))


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


    
    useInterval(() => {
            setValid(valid-1)
            console.log(valid)
            return valid
        },1000)

        
if(valid>0){
        return <span>{secondsToHms(valid)}
          </span>
}   return  <span style={{color: "red"}}>EXPIRED
</span>

    }






export default TimerTestRequest;