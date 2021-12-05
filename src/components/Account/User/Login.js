import axios from "axios";
import React, { Component } from "react";
import { baseUrl } from "../../../config/BaseUrl";
import ErrorForm from "../../Error/ErrorForm";
import Register from "./Register";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      errorForm: {},
      user: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    let getName = e.target.name;
    this.setState({
      [getName]: e.target.value,
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    let { pass, email, errorForm } = this.state;
    let flag = true;
    errorForm.email = errorForm.pass = "";
    if (email == "") {
      errorForm.email = "Vui lòng nhập email";
      flag = false;
    } else {
      const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (!testEmail.test(email)) {
        errorForm.email = "Vui lòng nhập đúng định dạng email";
        flag = false;
      }
    }
    if (pass == "") {
      errorForm.pass = "Vui lòng nhập mật khẩu";
      flag = false;
    }

    if (!flag) {
      this.setState({
        errorForm,
      });
    } else {
      const user = {
        email: this.state.email,
        password: this.state.pass,
      };
      console.log(user);
      axios
        .post(`${baseUrl}/api/login`, user)
        .then((res) => {
          if (res.data.errors) {
            this.setState({
              errorForm: res.data.errors,
            });
          } else {
            const { Auth } = res.data;
            const { token } = res.data.success;
            const userLogin = {
              auth_token: Auth,
              token,
            };
            localStorage.setItem("userLogin", JSON.stringify(userLogin));
            this.props.history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    console.log("abc");
    return (
      <div>
        <section id="form">
          {/*form*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">
                  {/*login form*/}
                  <h2>Login to your account</h2>
                  <ErrorForm errorForm={this.state.errorForm} />
                  <form onSubmit={this.handleSubmit}>
                    <input
                      name="email"
                      type="text"
                      value={this.state.email}
                      placeholder="Email Address"
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={this.state.pass}
                      name="pass"
                      onChange={this.handleChange}
                    />
                    <span>
                      <input type="checkbox" className="checkbox" />
                      Keep me signed in
                    </span>

                    <button type="submit" className="btn btn-default">
                      Login
                    </button>
                  </form>
                </div>
                {/*/login form*/}
              </div>
              <div className="col-sm-1">
                <h2 className="or">OR</h2>
              </div>
              <Register />
            </div>
          </div>
        </section>
        {/*/form*/};
      </div>
    );
  }
}

export default Login;
