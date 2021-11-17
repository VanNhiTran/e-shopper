import React, { Component } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Product from "../components/Product";
import Slider from "../components/Slider";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Slider />
        <Product />
        <Footer />
      </>
    );
  }
}

export default Home;
