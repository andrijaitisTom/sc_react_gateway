import React from 'react'


const QrCode = (props) => {
    return <img src={'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+props.address}></img>
}

export default QrCode;