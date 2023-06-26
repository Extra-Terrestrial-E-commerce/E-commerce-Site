import React from "react";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';


const WriteReview = ({currentProduct, closeModal}) => {

  const [addReviewParams, setAddReviewParams] = useState({
    product_id: 0,
    rating: 0,
    summary: "",
    body: "",
    recommend: true,
    name: "",
    email: "",
    photos: [],
    characteristics: {}
  });


  const addReview = (params) => {
    apiClient.post('/reviews/', params )
        .then((data) => {

        })
        .catch((error) => {
          console.error(error);
        });
  };

  console.log("currentProduct", currentProduct);

  return (
    <div>

      <h3>Write your review for {currentProduct.name} here: </h3>

      <form>
        <button onClick={closeModal}>close</button>

        <input placeholder="star rating"
        onChange={(e)=>{setAddReviewParams.rating(e.target.value)}}></input>
        <br/>

        <input placeholder="title"
        onChange={(e)=>{setAddReviewParams.summary(e.target.value)}}></input>
        <br />

        <textarea placeholder="description"
        onChange={(e)=>{setAddReviewParams.body(e.target.value)}}></textarea>
        <br/>

        <input placeholder="name"
        onChange={(e)=>{setAddReviewParams.name(e.target.value)}}></input>

        <input
        placeholder="email"
        onChange={(e)=>{setAddReviewParams.email(e.target.value)}}></input>

          <input placeholder="size"
          ></input>
          <input placeholder="confort"
          ></input>
        <button>Submit</button>

      </form>
    </div>
  )
  }

  export default WriteReview;