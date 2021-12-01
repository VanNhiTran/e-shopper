import axios from "axios";
import React, { Component } from "react";
import { baseUrl } from "../../config/BaseUrl";
import ErrorForm from "../Error/ErrorForm";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      errorForm: {},
    };
  }

  handleChangeComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmitComment = () => {
    const { errorForm } = this.state;
    errorForm.comment = "";
    const userData = JSON.parse(localStorage.getItem("userLogin"));
    if (!userData) {
      errorForm.comment = "Vui lòng đăng nhập trước khi bình luận";
      this.setState({ errorForm });
    } else {
      const { token, auth_token } = userData;
      const { id, getDataCmt, id_comment } = this.props;
      const { comment } = this.state;
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      if (comment) {
        const formData = new FormData();
        formData.append("id_blog", id);
        formData.append("id_user", auth_token.id);
        formData.append("name_user", auth_token.name);
        formData.append("id_comment", id_comment ? id_comment : 0);
        formData.append("comment", comment);
        formData.append("image_user", auth_token.avatar);
        axios
          .post(`${baseUrl}/api/blog/comment/${id}`, formData, config)
          .then((res) => {
            if (res.data.errors) {
              this.setState({
                errorForm: res.data.errors,
              });
            } else {
              getDataCmt(res.data.data);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  render() {
    return (
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>
            <div className="text-area" id="formCmt">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <textarea
                name="message"
                rows={11}
                defaultValue={""}
                value={this.state.comment}
                onChange={this.handleChangeComment}
              />
              <a
                className="btn btn-primary"
                href
                onClick={this.handleSubmitComment}
              >
                post comment
              </a>
              <ErrorForm errorForm={this.state.errorForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
