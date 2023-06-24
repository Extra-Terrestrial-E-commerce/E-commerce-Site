import React from "react";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const WriteReview = () => {

  // const [addReviewParams, setAddReviewParams] = useState {
  //   product_id: 0,
  //   rating: 0,
  //   summary: "",
  //   body: "",
  //   recommend: true,
  //   name: "",
  //   email: "",
  //   photos: [],
  //   characteristics: {}
  // }

  const addReviewParams = {
      product_id: 40344,
      rating: 3.5,
      summary: "I liked the camo onsie",
      body: "it was a great fit for my baby",
      recommend: true,
      name: "satisfiedCustomer1",
      email: "example@example.com",
      photos: [],
      characteristics: {}
    }


  const addReview = (params) => {
    apiClient.post('/reviews/', params )
        .then((data) => {

        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
    <div>
      <form>
        <input placeholder="star rating"></input>
        <br/>
        <input placeholder="title"></input>
        <br />
        <input placeholder="description"></input>
        <br/>
        <div class="row">
          <input placeholder="size"></input>
          <input placeholder="confort"></input>
        </div>

      </form>
    </div>
  )
  }

  export default WriteReview;