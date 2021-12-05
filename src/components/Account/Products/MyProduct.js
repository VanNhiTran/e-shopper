import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../config/BaseUrl";
import ErrorForm from "../../Error/ErrorForm";

function MyProduct() {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    company: "",
    detail: "",
    status: "",
    sale: "",
  });
  const [errorForm, setErrorForm] = useState({});
  const [fileList, setFileList] = useState([]);
  const [brandList, setBrandList] = useState({});
  const [categoryList, setCategoryList] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/category-brand`)
      .then((res) => {
        const { brand, category } = res.data;
        setBrandList((state) => ({ ...state, brand }));
        setCategoryList((state) => ({ ...state, category }));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(brandList, categoryList);

  const renderCategory = () => {
    if (categoryList.length > 0) {
      return categoryList?.map((category, index) => {
        return (
          <option key={index} value={category.id}>
            {category.category}
          </option>
        );
      });
    }
  };

  const renderBrand = () => {
    if (brandList.length > 0) {
      return brandList?.map((brand, index) => {
        return (
          <option key={index} value={brand.id}>
            {brand.brand}
          </option>
        );
      });
    }
  };

  const handleUploadFile = (e) => {
    const { files } = e.target;
    console.log(files);
    setFileList((state) => ({ ...state, files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    const type = ["png", "jpg", "JPG", "PNG", "jpeg"];
    if (fileList.length > 0) {
      Object.keys(fileList).map((file, index) => {
        console.log(file);
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
        } else {
          errorForm.file = "Vui lòng upload ảnh";
          flag = false;
        }
        if (!flag) {
          setErrorForm(errorForm);
        }
      });
    }
  };

  const handleChange = (e) => {
    const getName = e.target.name;
    const value = e.target.value;
    setProductInfo((state) => ({ ...state, [getName]: value }));
  };

  const renderSaleInput = () => {
    if (productInfo.status == 0) {
      console.log(111);
      return (
        <select>
          <option>Sale</option>
        </select>
      );
    }
  };
  console.log(productInfo);

  return (
    <section id="form">
      <div className="container">
        <div className="login-form">
          <h2>Create product</h2>
          <ErrorForm errorForm={errorForm} />
          <form
          // onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              onChange={handleChange}
            />
            <select name="category">
              <option>Please choose category</option>
              {renderCategory()}
            </select>
            <select name="brand">
              <option>Please choose brand</option>
              {renderBrand()}
            </select>
            <select name="status" onChange={handleChange}>
              <option value="">Status</option>
              <option value="0">Sale</option>
              <option value="1">New</option>
            </select>
            {/* {renderSaleInput} */}
            <input
              type="text"
              placeholder="Company profile"
              name="company"
              onChange={handleChange}
            />
            <input type="file" multiple onChange={handleUploadFile} />
            <textarea
              rows="10"
              placeholder="Detail"
              name="detail"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-default">
              Create
            </button>
          </form>
        </div>
        {/*/login form*/}
      </div>
    </section>
  );
}

export default MyProduct;
