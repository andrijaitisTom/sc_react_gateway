import React, { Component, Fragment } from 'react';
import classes from './SCOrderSummary.module.css'
import Modal from '../Modal/Modal'





class TestRequest extends Component {
    render() {
        return(
            <Fragment>
            <Modal
            show = {this.props.show}
            clicked={this.props.clicked}
            >
                <div className={classes.container}>
                    <div className={classes.buttonConta}>
                <button className={classes.cancelOrder} onClick={this.props.clicked}>
                </button>
                    </div>

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
            <canvas className={classes.progress}>

            </canvas>
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
 
 <div className={classes.copyButtonContainer}>
<img src='https://spectrocoin.com/payment/static/media/copy.c90d0aac.svg' alt='copyButton' className={classes.copyButton}></img>
    <div className={classes.copyButtonValue}
    onClick={() =>  navigator.clipboard.writeText(this.props.responseData[6])}
    >
    Copy address
    </div>
 </div>
 </div>
            <a href={this.props.responseData[8]} className={classes.payWithSC}>
                Pay with SpectroCoin
            </a>
            
            <div className={classes.info}>
            <p>
                <strong>
                No transaction fees
                </strong>
             are charged when paying with SpectroCoin
            </p>
            </div>

<div className={classes.redirectUrl}>  </div>
                </div>
        
            </Modal>
        </Fragment>
        )
    }

}

export default TestRequest;
