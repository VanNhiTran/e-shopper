import React, { Component } from "react";
import Product from "../components/Product";
import Slider from "../components/Slider";

class Home extends Component {
  render() {
    return (
      <>
        <div className="col-sm-9">
          <Slider />
          <Product />
        </div>
      </>
    );
  }
}

export default Home;
