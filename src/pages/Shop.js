import React, { Component } from "react";
import Header from "../components/layout/Header";
import product1 from "../assets/images/home/product1.jpg";
import product2 from "../assets/images/home/product2.jpg";
import product3 from "../assets/images/home/product3.jpg";
import product4 from "../assets/images/home/product4.jpg";
import product5 from "../assets/images/home/product5.jpg";
import product6 from "../assets/images/home/product6.jpg";
import product7 from "../assets/images/shop/product7.jpg";
import product8 from "../assets/images/shop/product8.jpg";
import product9 from "../assets/images/shop/product9.jpg";
import product10 from "../assets/images/shop/product10.jpg";
import product11 from "../assets/images/shop/product11.jpg";
import product12 from "../assets/images/shop/product12.jpg";
import ads from "../assets/images/shop/advertisement.jpg";
import news from "../assets/images/home/new.png";
import sale from "../assets/images/home/sale.png";
import LeftMenuBar from "../components/layout/LeftMenuBar";
import Footer from "../components/layout/Footer";

class Shop extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <section id="advertisement">
            <div className="container">
              <img src={ads} alt />
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <LeftMenuBar />
                </div>
                <div className="col-sm-9 padding-right">
                  <div className="features_items">
                    <h2 className="title text-center">Features Items</h2>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product12} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product11} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product10} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product9} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <img src={news} className="new" alt />
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product8} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                          <img src={sale} className="new" alt />
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product7} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product6} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product5} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product4} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product3} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product2} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src={product1} alt />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                              <i className="fa fa-shopping-cart" />
                              Add to cart
                            </a>
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a href>
                                <i className="fa fa-plus-square" />
                                Add to compare
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="pagination">
                      <li className="active">
                        <a href>1</a>
                      </li>
                      <li>
                        <a href>2</a>
                      </li>
                      <li>
                        <a href>3</a>
                      </li>
                      <li>
                        <a href>»</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Shop;
