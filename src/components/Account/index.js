import React, { Component } from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import Account from "./User/Account";

class Index extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/account" component={Account} />
          {/* <Route path="account/product" component={}/> */}
        </Switch>
      </App>
    );
  }
}

export default Index;
