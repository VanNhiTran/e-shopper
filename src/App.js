import "./App.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/layout/Header";
import LeftMenuBar from "./components/layout/LeftMenuBar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    let path = this.props.location.pathname;

    return (
      <>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              {path.includes("/account") ? (
                ""
              ) : (
                <div className="col-sm-3">
                  <LeftMenuBar />{" "}
                </div>
              )}

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
