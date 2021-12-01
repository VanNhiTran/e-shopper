import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../assets/images/home/logo.png";

class Header extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };
  renderLoginBtn = () => {
    if (localStorage.userLogin) {
      return (
        <a onClick={this.handleLogout} style={{ cursor: "pointer" }}>
          <i className="fa fa-lock" />
          Logout
        </a>
      );
    } else {
      return (
        <NavLink to="/login">
          <i className="fa fa-lock" /> Login
        </NavLink>
      );
    }
  };
  handleAccount = () => {
    if (localStorage.userLogin) {
      return (
        <NavLink to="/account">
          <i className="fa fa-user" /> Account
        </NavLink>
      );
    } else {
      return (
        <NavLink to="/login">
          <i className="fa fa-user" /> Account
        </NavLink>
      );
    }
  };
  render() {
    return (
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <a href>
                        <i className="fa fa-phone" /> +2 95 01 88 821
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fa fa-envelope" /> info@domain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left">
                  <NavLink to="/">
                    <img src={logo} alt />
                  </NavLink>
                </div>
                <div className="btn-group pull-right clearfix">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href>Canada</a>
                      </li>
                      <li>
                        <a href>UK</a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href>Canadian Dollar</a>
                      </li>
                      <li>
                        <a href>Pound</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 clearfix">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    <li>{this.handleAccount()}</li>
                    <li>
                      <a href>
                        <i className="fa fa-star" /> Wishlist
                      </a>
                    </li>
                    <li>
                      <NavLink to="/checkout">
                        <i className="fa fa-crosshairs" /> Checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">
                        <i className="fa fa-shopping-cart" /> Cart
                      </NavLink>
                    </li>
                    <li>{this.renderLoginBtn()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="dropdown">
                      <NavLink to="/shop">
                        Shop
                        <i className="fa fa-angle-down" />
                      </NavLink>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <NavLink to="/shop">Products</NavLink>
                        </li>
                        <li>
                          <NavLink to="/roduct-detail" className="active">
                            Product Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/checkout">Checkout</NavLink>
                        </li>
                        <li>
                          <NavLink to="/cart">Cart</NavLink>
                        </li>
                        <li>
                          <NavLink to="/login">Login</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <NavLink to="/blog/list">
                        Blog
                        <i className="fa fa-angle-down" />
                      </NavLink>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <NavLink to="/blog/list">Blog List</NavLink>
                        </li>
                        <li>
                          <NavLink to="/blog-single.html">Blog Single</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/404.html">404</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
