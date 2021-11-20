import "./App.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/layout/Header";
import LeftMenuBar from "./components/layout/LeftMenuBar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <LeftMenuBar />
              </div>
              {this.props.children}
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default withRouter(App);
