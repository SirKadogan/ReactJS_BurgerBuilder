import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";

class burgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Auxiliary>
        <div>burger</div>
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default burgerBuilder;
