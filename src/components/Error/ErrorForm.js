import React, { Component } from "react";

class ErrorForm extends Component {
  renderErr() {
    let { errorForm } = this.props;

    if (Object.keys(errorForm).length > 0) {
      return Object.keys(errorForm).map((key, index) => {
        return <li key={index}>{errorForm[key]}</li>;
      });
    }
  }
  render() {
    return <ul>{this.renderErr()}</ul>;
  }
}

export default ErrorForm;
