import React from 'react'
import TestRequest from './TestRequest'
import Request from './Request'



class CreateSCOrder extends React.Component {


  

    render() {
        // console.log(this.props.isTestOrder)
        let orderSummary;
  if (this.props.isTestOrder) {
    orderSummary = <TestRequest
    show = {this.props.show}
    responseData = {this.props.responseData}
    closeModalHandler = {this.props.closeModalHandler}
    clicked={this.props.clicked}
/>
  } else {
    orderSummary = <Request
    show = {this.props.show}
    responseData = {this.props.responseData}
    closeModalHandler = {this.props.closeModalHandler}
    clicked={this.props.clicked}
/>  }
        return(
            <div>
                {orderSummary}
            </div>
        )
    }
}

export default CreateSCOrder;



 