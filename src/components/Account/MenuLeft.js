import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuLeft() {
  return (
    <div className="left-sidebar">
      <h2>Category</h2>
      <div className="panel-group category-products" id="accordian">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                <span className="badge pull-right">
                  <i className="fa fa-plus" />
                </span>
                ACCOUNT
              </a>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <NavLink to="/account/my-product">
                <span className="badge pull-right">
                  <i className="fa fa-plus" />
                </span>
                MY PRODUCT
              </NavLink>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
