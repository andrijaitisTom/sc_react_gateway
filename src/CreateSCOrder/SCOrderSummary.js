import React, { Fragment } from 'react'
import Modal from '../Modal/Modal'
import classes from './SCOrderSummary.module.css'
import {ReactComponent as Logo} from '../logo.svg'

class CreateSCOrder extends React.Component {


    names =  {
        0:"orderRequestId",
        1:"ORDER ID",
        2:"payCurrency",
        3:"payAmount",
        4:"receiveCurrency",
        5:"receiveAmount",
        6:"Address", //<--- this one is generated in non test cases only
        7:"Valid for",
        8:"redirectUrl"}


    render() {
        // const dataSummary = Object.keys(this.props.responseData).map((dataKey) => {
        //     return (<li key={dataKey}>{dataKey} : {this.props.responseData[dataKey]}</li>)
        // })
        return(
            <Fragment>
                <Modal
                show = {this.props.show}
                close = {this.props.close}
                >
                    <div className={classes.container}>

<div className={classes.header}>
<div className={classes.orderId}>
        Order ID:
         <span className={classes.orderIdValue}> {this.props.responseData[0]} </span>
    </div>
    <div className={classes.validFor}>
        Valid for:
        <span className={classes.validForValue}> {this.props.responseData[7]} </span>
    </div>
</div>
<div >
    <div className={classes.order}>Paying for order {this.props.responseData[1]} </div>
        <div className={classes.pay}>
            <div className={classes.payAmount}> {this.props.responseData[3]} </div>
            <div className={classes.payCurrency}> {this.props.responseData[2]}     </div>
    </div>
</div>
 <div className={classes.receive}>
    <div className={classes.receiveAmount}>≈ {this.props.responseData[5]} </div>
    <div className={classes.receiveCurrency}> {this.props.responseData[4]} </div>
 </div>

<canvas>

</canvas>
    <div className={classes.address}> Address: 
        <span className={classes.addressValue}> {this.props.responseData[6]} </span>
     </div>
     <div className={classes.copyButton}>
<img src='https://spectrocoin.com/payment/static/media/copy.c90d0aac.svg' alt='copyButton' className={classes.copyButton}></img>
     </div>
    <div className={classes.redirectUrl}> {this.props.responseData[8]} </div>
                    </div>
            
                </Modal>
            </Fragment>
        )
    }
}

export default CreateSCOrder;



 