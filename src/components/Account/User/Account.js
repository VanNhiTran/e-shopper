import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../config/BaseUrl";
import ErrorForm from "../../Error/ErrorForm";

function Account(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pass: "",
    avatar: {},
    id: "",
    token: "",
  });
  const [errorForm, setErrorForm] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("userLogin");
    if (userData) {
      const userLogin = JSON.parse(userData);
      const { token, auth_token } = userLogin;
      setUser({
        name: auth_token.name,
        email: auth_token.email,
        address: auth_token.address,
        phone: auth_token.phone,
        pass: auth_token.password,
        id: auth_token.id,
        token,
      });
    }
  }, []);

  function handleChange(e) {
    const getName = e.target.name;
    const value = e.target.value;
    setUser((state) => ({ ...state, [getName]: value }));
  }

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser((state) => ({ ...state, avatar: e.target.result, file: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  function handleUpdate(e) {
    e.preventDefault();
    const { name, address, phone, file } = user;
    let flag = true;
    let errorFormSubmit = {};
    if (name == "") {
      errorFormSubmit.name = "Vui lòng điền tên";
      flag = false;
    }
    if (phone == "") {
      errorFormSubmit.phone = "Vui lòng nhập số điện thoại";
      flag = false;
    }
    if (address == "") {
      errorFormSubmit.address = "Vui lòng nhập địa chỉ";
      flag = false;
    }
    if (file) {
      const type = ["png", "jpg", "JPG", "PNG", "jpeg"];
      let size = file.size;
      let name = file.name;
      let fileType = name.split(".");
      let getType = fileType[fileType.length - 1];
      if (!type.includes(getType)) {
        errorFormSubmit.file = "Vui lòng upload file ảnh đúng định dạng";
        flag = false;
      } else if (size > 1024 * 1024) {
        errorFormSubmit.file = "Vui lòng upload ảnh nhỏ hơn 1mb";
        flag = false;
      }
    } else {
      errorFormSubmit.file = "Vui lòng upload ảnh";
      flag = false;
    }
    if (!flag) {
      setErrorForm(errorFormSubmit);
    } else {
      const { name, email, address, phone, pass, avatar } = user;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("password", pass);
      formData.append("avatar", avatar);
      const config = {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      axios
        .post(`${baseUrl}/api/user/update/${user.id}`, formData, config)
        .then((res) => {
          if (res.data.errors) {
            setErrorForm(res.data.errors);
          } else {
            console.log(res);
            alert("Cap nhat thong tin thanh cong");
            const { Auth } = res.data;
            const { token } = res.data.success;
            const userLogin = {
              auth_token: Auth,
              token,
            };
            localStorage.setItem("userLogin", JSON.stringify(userLogin));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <section id="form">
      <div className="container">
        <div className="login-form">
          <h2>Update your account</h2>
          <ErrorForm errorForm={errorForm} />
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              readOnly
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Pass"
              name="pass"
              value={user.pass}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={user.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
            <input type="file" name="avatar" onChange={handleChangeFile} />
            <button type="submit" className="btn btn-default">
              Update
            </button>
          </form>
        </div>
        {/*/login form*/}
      </div>
    </section>
  );
}

export default Account;
