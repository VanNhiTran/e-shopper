import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Login from "./components/Account/User/Login";
import Contact from "./components/Contact";
import Account from "./components/Account/index";
import MyProduct from "./components/Account/Products/MyProduct";
// import Index from "./components/Account";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog/list" component={Blog} />
          <Route path="/blog/detail/:id" component={BlogDetail} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route component={Account} />
          <Route component={MyProduct} />
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
