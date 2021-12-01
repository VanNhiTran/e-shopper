import React, { useEffect, useState } from "react";
import ErrorForm from "../../Error/ErrorForm";

function Account(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pass: "",
    avatar: {},
  });
  const [errorForm, setErrorForm] = useState({});
  // const [input, setInput] = useState({});
  // const [name, setName] = useState({});

  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      const { token, auth_token } = userLogin;
      // setName(auth_token.name)
      // setName(auth_token.name)
      // setName(auth_token.name)
      // setName(auth_token.name)
      setUser({
        name: auth_token.name,
        email: auth_token.email,
        address: auth_token.address,
        phone: auth_token.phone,
      });
    }
  }, []);
  function handleChange(e) {
    let getName = e.target.name;
    let getValue = e.target.value;
    setUser({ [getName]: getValue });
  }

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser({
          avatar: e.target.result,
          file: file,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  function handleUpdate(e) {
    e.preventDefault();
    const { name, email, address, phone, file } = user;
    let flag = true;
    errorForm.name = errorForm.email = errorForm.phone = errorForm.address = "";
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
      console.log(111);
      console.log(errorForm);
      setErrorForm(errorForm);
    } else {
      const userUpdate = {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
      };
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
