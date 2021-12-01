import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
import Comment from "./CommentForm";
import socials from "../../assets/images/blog/socials.png";
import moment from "moment";
import CommentPost from "./CommentPost";
import CommentForm from "./CommentForm";
import StarRatings from "react-star-ratings";
import Rating from "./Rating";

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetail: {},
      errorForm: {},
      commentList: [],
      id_comment: "",
    };
  }
  // constructor -> render -> componentDidMount
  // -> componentUpdaterender chay lai khi co state/props thay doi
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`${baseUrl}/api/blog/detail/${id}`)
      .then((res) => {
        let { data } = res.data;
        this.setState({ blogDetail: data });
        this.setState({ commentList: data.comment });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getDataCmt = (data) => {
    this.setState({
      commentList: this.state.commentList.concat(data),
    });
  };
  getIdCmt = (id) => {
    this.setState({
      id_comment: id,
    });
  };

  render() {
    const { blogDetail } = this.state;
    console.log(blogDetail);
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
            <Rating id={this.props.match.params.id} />
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

          <div className="socials-share">
            <a href>
              <img src={socials} alt="s" />
            </a>
          </div>
          <div className="response-area">
            <h2>{blogDetail.comment?.length} RESPONSES</h2>
            <CommentPost
              commentList={this.state.commentList}
              getIdCmt={this.getIdCmt}
            />
          </div>

          <CommentForm
            getDataCmt={this.getDataCmt}
            blogDetail={this.state.blogDetail}
            id={this.props.match.params.id}
            id_comment={this.state.id_comment}
          />
        </div>
      );
    }
  }
}

export default BlogDetail;

// cmt xong, gui api, backend xu ly -> save database
// => res: cmt moi nhat => detail => noi vao state listcmt (state thay doi thi tu render lai)

// detail: lay data moi(cmt) thi reload => listcmt => hien thi ra .

// function  getCmt(params) {
//   params => noi
// }

// => component cmt
// <comment getcmt= {this.getCmt}..

// goi 1 bien : this.próp.getCmt
// xu ly api xong va tra ve cmt moi :this.próp.getCmt(res.data)
