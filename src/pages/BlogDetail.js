import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../config/BaseUrl";

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetail: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`${baseUrl}/api/blog/detail/${id}`)
      .then((res) => {
        let { data } = res.data;
        this.setState({ blogDetail: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderComment = () => {
    const { blogDetail } = this.state;
    if (blogDetail.comment?.length > 0) {
      return blogDetail.comment.map((comment, index) => {
        return (
          <li className="media" key={index}>
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src={`${baseUrl}/upload/Blog/image/` + comment.image_user}
                alt
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user" />
                  {comment.name_user}
                </li>
                <li>
                  <i className="fa fa-clock-o" /> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar" /> DEC 5, 2013
                </li>
              </ul>
              <p>{comment.comment}</p>
              <a className="btn btn-primary" href>
                <i className="fa fa-reply" />
                Replay
              </a>
            </div>
          </li>
        );
      });
    }
  };

  render() {
    const { blogDetail } = this.state;
    if (blogDetail) {
      return (
        <div className="col-sm-9">
          <div className="blog-post-area">
            <h2 className="title text-center">Latest From our Blog</h2>
            <div className="single-blog-post">
              <h3>{blogDetail.title}</h3>
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
              </div>
              <a href>
                <img
                  src={`${baseUrl}/upload/Blog/image/` + blogDetail.image}
                  alt
                />
              </a>
              <p>{blogDetail.content}</p>

              <div className="pager-area">
                <ul className="pager pull-right">
                  <li>
                    <a href="#">Pre</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*/blog-post-area*/}
          <div className="rating-area">
            <ul className="ratings">
              <li className="rate-this">Rate this item:</li>
              <li>
                <i className="fa fa-star color" />
                <i className="fa fa-star color" />
                <i className="fa fa-star color" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </li>
              <li className="color">(6 votes)</li>
            </ul>
            <ul className="tag">
              <li>TAG:</li>
              <li>
                <a className="color" href>
                  Pink <span>/</span>
                </a>
              </li>
              <li>
                <a className="color" href>
                  T-Shirt <span>/</span>
                </a>
              </li>
              <li>
                <a className="color" href>
                  Girls
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="socials-share">
            <a href>
              <img src="images/blog/socials.png" alt />
            </a>
          </div> */}

          <div className="response-area">
            <h2>{blogDetail.comment?.length} RESPONSES</h2>
            {this.renderComment()}
          </div>

          <div className="replay-box">
            <div className="row">
              <div className="col-sm-12">
                <h2>Leave a replay</h2>
                <div className="text-area">
                  <div className="blank-arrow">
                    <label>Your Name</label>
                  </div>
                  <span>*</span>
                  <textarea name="message" rows={11} defaultValue={""} />
                  <a className="btn btn-primary" href>
                    post comment
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*/Repaly Box*/}
        </div>
      );
    }
  }
}

export default BlogDetail;
