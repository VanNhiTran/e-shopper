import React, { Component } from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import MyProduct from "./Products/MyProduct";
import Account from "./User/Account";

class Index extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/account/update" component={Account} />
          <Route path="/account/my-product" component={MyProduct} />
        </Switch>
      </App>
    );
  }
}

export default Index;
