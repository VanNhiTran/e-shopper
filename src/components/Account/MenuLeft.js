import React from "react";

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
          <div id="mens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href>Fendi</a>
                </li>
                <li>
                  <a href>Guess</a>
                </li>
                <li>
                  <a href>Valentino</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                <span className="badge pull-right">
                  <i className="fa fa-plus" />
                </span>
                MY PRODUCT
              </a>
            </h4>
          </div>
          <div id="mens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href>Fendi</a>
                </li>
                <li>
                  <a href>Guess</a>
                </li>
                <li>
                  <a href>Valentino</a>
                </li>
                <li>
                  <a href>Dior</a>
                </li>
                <li>
                  <a href>Versace</a>
                </li>
                <li>
                  <a href>Armani</a>
                </li>
                <li>
                  <a href>Prada</a>
                </li>
                <li>
                  <a href>Dolce and Gabbana</a>
                </li>
                <li>
                  <a href>Chanel</a>
                </li>
                <li>
                  <a href>Gucci</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
