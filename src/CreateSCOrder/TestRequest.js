import React, { Component, Fragment } from 'react';
import classes from './SCOrderSummary.module.css'
import Modal from '../Modal/Modal'
import Ticker from '../Ticker/Ticker';
import Timer from './Timer';


class TestRequest extends Component {
    
    render() {
        // console.log(this.props.responseData[6])
        return(
            <Fragment>
            <Modal
            show = {this.props.show}
            clicked={this.props.clicked}
            >
                <div className={classes.container}>
                    <Ticker     range={this.props.range}/>
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
<<<<<<< HEAD
    <span className={classes.validForValue}> <Timer finishTime ={this.props.responseData[6]}/> </span>
=======
    <span className={classes.validForValue}> {this.props.responseData[6]} </span>
>>>>>>> 0643d0fdb971b843251ba11db8f50db579e1373d
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
    <span className={classes.addressValue}> This is a test order </span>
 
 <div className={classes.copyButtonContainer}>
<img src='https://spectrocoin.com/payment/static/media/copy.c90d0aac.svg' alt='copyButton' className={classes.copyButton}></img>
    <div className={classes.copyButtonValue}
    onClick={() =>  navigator.clipboard.writeText('This is a test order')}
    >
    Copy address
    </div>
 </div>
 </div>
            <a href={this.props.responseData[7]} className={classes.payWithSC}>
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

