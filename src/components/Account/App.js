import React, { Component } from "react";
import MenuLeft from "./MenuLeft";

class App extends Component {
  render() {
    return (
      <>
        <div className="col-sm-3">
          <MenuLeft />
        </div>
        <div className="col-sm-9">{this.props.children}</div>
      </>
    );
  }
}

export default App;
