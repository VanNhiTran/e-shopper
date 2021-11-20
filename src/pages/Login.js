import React, { Component } from "react";
import ErrorForm from "../components/Error/ErrorForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      level: 0,
      errorForm: {},
    };
  }
  handleChange = (e) => {
    let getName = e.target.name;
    this.setState({
      [getName]: e.target.value,
    });
  };
  handleSubmit = (e) => {
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
    if (flag) {
      console.log("ok");
      console.log(this.state.errorForm);
    }
  };
  render() {
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
                  <form onClick={this.handleSubmit}>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      name="pass"
                      onChange={this.handleChange}
                    />
                    <span>
                      <input type="checkbox" className="checkbox" />
                      Keep me signed in
                    </span>
                    <ErrorForm errorForm={this.state.errorForm} />
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
              <div className="col-sm-4">
                <div className="signup-form">
                  {/*sign up form*/}
                  <h2>New User Signup!</h2>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-default">
                      Signup
                    </button>
                  </form>
                </div>
                {/*/sign up form*/}
              </div>
            </div>
          </div>
        </section>
        {/*/form*/};
      </div>
    );
  }
}

export default Login;
