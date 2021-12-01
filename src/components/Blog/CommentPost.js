import moment from "moment";
import React, { Component } from "react";
import { baseUrl } from "../../config/BaseUrl";

class CommentPost extends Component {
  renderComment = () => {
    const { commentList, getIdCmt } = this.props;
    if (commentList.length > 0) {
      return commentList.map((comment, index) => {
        if (comment.id_comment == 0) {
          return (
            <>
              <li className="media" key={index}>
                <a className="pull-left" href="#">
                  <img
                    className="media-object"
                    src={`${baseUrl}/upload/user/avatar/` + comment.image_user}
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
                      <i className="fa fa-clock-o" />
                      {moment(comment.created_at).format("h:mm a")}
                    </li>
                    <li>
                      <i className="fa fa-calendar" />
                      {moment(comment.created_at).format("MMM d, YYYY")}
                    </li>
                  </ul>
                  <p>{comment.comment}</p>
                  <a
                    id={comment.id}
                    className="btn btn-primary"
                    href="#formCmt"
                    onClick={() => {
                      getIdCmt(comment.id);
                    }}
                  >
                    <i className="fa fa-reply" />
                    Replay
                  </a>
                </div>
              </li>
              {commentList.map((comment2, index) => {
                if (comment2.id_comment == comment.id) {
                  return (
                    <li key={index} className="media second-media">
                      <a className="pull-left" href="#">
                        <img
                          className="media-object"
                          src={
                            `${baseUrl}/upload/user/avatar/` +
                            comment2.image_user
                          }
                          alt=""
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user" />
                            {comment2.name_user}
                          </li>
                          <li>
                            <i className="fa fa-clock-o" />
                            {moment(comment2.created_at).format("h:mm a")}
                          </li>
                          <li>
                            <i className="fa fa-calendar" />
                            {moment(comment2.created_at).format("MMM d, YYYY")}
                          </li>
                        </ul>
                        <p>{comment2.comment}</p>
                        <a className="btn btn-primary" href>
                          <i className="fa fa-reply" />
                          Replay
                        </a>
                      </div>
                    </li>
                  );
                }
              })}
            </>
          );
        }
      });
    }
  };

  render() {
    return <ul class="media-list">{this.renderComment()}</ul>;
  }
}

export default CommentPost;
