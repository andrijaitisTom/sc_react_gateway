import React from 'react'
import classes from './QrCode.module.css'


const QrCode = (props) => {
if (props.address === undefined)
    return <img className={classes.skeleton}></img>
    else return <img src={'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+props.address} className={classes.skeleton} alt="QR_code" ></img>
}

export default QrCode;