import React from 'react'
import classes from './QrCode.module.css'


const QrCode = (props) => {

    return <div>
        <img src={'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+props.address} alt="QR_code" ></img>
    </div>
}

export default QrCode;