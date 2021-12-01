import React, { Component } from "react";

function ErrorForm(props) {
  function renderErr() {
    let { errorForm } = props;

    console.log(errorForm);

    if (Object.keys(errorForm).length > 0) {
      return Object.keys(errorForm)?.map((key, index) => {
        return <li key={index}>{errorForm[key]}</li>;
      });
    }
  }

  return <ul>{renderErr()}</ul>;
}

export default ErrorForm;
