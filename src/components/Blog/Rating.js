import axios from "axios";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { baseUrl } from "../../config/BaseUrl";
import ErrorForm from "../Error/ErrorForm";

export default function Rating(props) {
  const [rate, setRate] = useState(0);
  const [errorForm, setErrorForm] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/api/blog/rate/${props.id}`).then((res) => {
      const { data } = res.data;
      if (data) {
        console.log(data);
        let totalStars = data.reduce((total, obj, index) => {
          return (total += obj.rate);
        }, 0);
        setRate(totalStars / data.length);
      }
    });
  }, []);
  const changeRating = (newRating, name) => {
    setRate(newRating);

    const userData = JSON.parse(localStorage.getItem("userLogin"));
    if (!userData) {
      errorForm.rate = "Vui lòng đăng nhập trước khi đánh giá";
      setErrorForm(errorForm);
    } else {
      const { id } = userData.auth_token;
      const { token } = userData;
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      const formData = new FormData();
      formData.append("blog_id", Number(props.id));
      formData.append("user_id", id);
      formData.append("rate", newRating);
      axios
        .post(`${baseUrl}/api/blog/rate/${props.id}`, formData, config)
        .then((res) => {
          if (res.data.errors) {
            setErrorForm(res.data.errors);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ul className="ratings">
      <li className="rate-this">Rate this item:</li>
      <StarRatings
        rating={rate}
        starRatedColor="red"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />
      <li className="color">(6 votes)</li>
      <ErrorForm errorForm={errorForm} />
    </ul>
  );
}
