import React from "react";
import TestRequest from "./TestRequest";
import Request from "./Request";

class CreateSCOrder extends React.Component {
  render() {
    let orderSummary;
    if (this.props.isTestOrder) {
      orderSummary = (
        <TestRequest
          show={this.props.show}
          responseData={this.props.responseData}
          closeModalHandler={this.props.closeModalHandler}
          clicked={this.props.clicked}
          range={this.props.range}
        />
      );
    } else {
      orderSummary = (
        <Request
          show={this.props.show}
          responseData={this.props.responseData}
          closeModalHandler={this.props.closeModalHandler}
          clicked={this.props.clicked}
          range={this.props.range}
        />
      );
    }
    return <div>{orderSummary}</div>;
  }
}

export default CreateSCOrder;
