import React, { Component } from "react";
import Product from "../components/Product";
import Slider from "../components/Slider";

class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <Product />
      </>
    );
  }
}

export default Home;
