import axios from "axios";
import React, { Component } from "react";
import { baseUrl } from "../../../config/BaseUrl";
import ErrorForm from "../../Error/ErrorForm";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      phone: "",
      address: "",
      avatar: {},
      errorForm: {},
    };
  }
  handleChange = (e) => {
    let getName = e.target.name;
    this.setState({
      [getName]: e.target.value,
    });
  };

  handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          avatar: e.target.result,
          file: file,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, pass, phone, address, file, errorForm } = this.state;

    let flag = true;
    errorForm.name =
      errorForm.pass =
      errorForm.email =
      errorForm.phone =
      errorForm.address =
      errorForm.file =
        "";
    if (name == "") {
      errorForm.name = "Vui lòng điền tên";
      flag = false;
    }
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
    if (phone == "") {
      errorForm.phone = "Vui lòng nhập số điện thoại";
      flag = false;
    }
    if (address == "") {
      errorForm.address = "Vui lòng nhập địa chỉ";
      flag = false;
    }
    if (file) {
      const type = ["png", "jpg", "JPG", "PNG", "jpeg"];
      let size = file.size;
      let name = file.name;
      let fileType = name.split(".");
      let getType = fileType[fileType.length - 1];
      if (!type.includes(getType)) {
        errorForm.file = "Vui lòng upload file ảnh đúng định dạng";
        flag = false;
      } else if (size > 1024 * 1024) {
        errorForm.file = "Vui lòng upload ảnh nhỏ hơn 1mb";
        flag = false;
      }
    } else {
      errorForm.file = "Vui lòng upload ảnh";
      flag = false;
    }
    if (!flag) {
      this.setState({
        errorForm,
      });
    } else {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.pass,
        phone: this.state.phone,
        address: this.state.address,
        level: 0,
        avatar: this.state.avatar,
      };
      console.log(user);
      axios
        .post(`${baseUrl}/api/register`, user)
        .then((res) => {
          if (res.data.errors) {
            this.setState({
              errorForm: res.data.errors,
            });
          } else {
            alert("Đăng kí thành công");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div className="col-sm-4">
        <div className="signup-form">
          {/*sign up form*/}
          <h2>New User Signup!</h2>
          <ErrorForm errorForm={this.state.errorForm} />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <input type="file" name="avatar" onChange={this.handleChangeFile} />
            <button type="submit" className="btn btn-default">
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
