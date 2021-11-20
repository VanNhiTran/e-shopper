import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogItems: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://laravel-api.com/api/blog`)
      .then((res) => {
        const blogItems = res.data.blog.data;

        this.setState({ blogItems });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderBlog = () => {
    let { blogItems } = this.state;
    if (blogItems.length > 0) {
      return this.state.blogItems.map((blog, index) => {
        return (
          <div key={index} className="single-blog-post">
            <h3>{blog.title}</h3>
            <div className="post-meta">
              <ul>
                <li>
                  <i className="fa fa-user" /> Mac Doe
                </li>
                <li>
                  <i className="fa fa-clock-o" /> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar" /> DEC 5, 2013
                </li>
              </ul>
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </span>
            </div>
            <a href>
              <img
                src={"http://laravel-api.com/upload/Blog/image/" + blog.image}
                alt=""
              />
            </a>
            <p>{blog.description}</p>
            <Link className="btn btn-primary" to={"/blog/detail/" + blog.id}>
              Read More
            </Link>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          {this.renderBlog()}
          <div className="pagination-area">
            <ul className="pagination">
              <li>
                <a href className="active">
                  1
                </a>
              </li>
              <li>
                <a href>2</a>
              </li>
              <li>
                <a href>3</a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-angle-double-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
