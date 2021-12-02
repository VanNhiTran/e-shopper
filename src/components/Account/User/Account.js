import React, { useEffect, useState } from "react";
import ErrorForm from "../../Error/ErrorForm";

function Account(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pass: "",
    // avatar: {},
  });
  const [errorForm, setErrorForm] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("userLogin");
    if (userData) {
      const userLogin = JSON.parse(userData);

      const { token, auth_token, user } = userLogin;
      setUser({
        name: auth_token.name,
        email: user.email,
        address: auth_token.address,
        phone: auth_token.phone,
        pass: user.password,
      });
    }
  }, []);
  function handleChange(e) {
    let getName = e.target.name;
    let getValue = e.target.value;
    setUser({ [getName]: getValue });
  }

  // const handleChangeFile = (e) => {
  //   let file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setUser({
  //         avatar: e.target.result,
  //         file: file,
  //       });
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  function handleUpdate(e) {
    e.preventDefault();
    const { name, address, phone } = user;
    let flag = true;
    let errorFormSubmit = {};
    errorForm.name = errorForm.address = errorForm.phone = "";
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
    // if (file) {
    //   const type = ["png", "jpg", "JPG", "PNG", "jpeg"];
    //   let size = file.size;
    //   let name = file.name;
    //   let fileType = name.split(".");
    //   let getType = fileType[fileType.length - 1];
    //   if (!type.includes(getType)) {
    //     errorForm.file = "Vui lòng upload file ảnh đúng định dạng";
    //     flag = false;
    //   } else if (size > 1024 * 1024) {
    //     errorForm.file = "Vui lòng upload ảnh nhỏ hơn 1mb";
    //     flag = false;
    //   }
    // } else {
    //   errorForm.file = "Vui lòng upload ảnh";
    //   flag = false;
    // }
    if (!flag) {
      console.log(111);
      console.log(errorForm);
      setErrorForm(errorFormSubmit);
    } else {
      const userUpdate = {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
      };
      console.log(userUpdate);
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
            {/* <input type="file" name="avatar" onChange={handleChangeFile} /> */}
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
