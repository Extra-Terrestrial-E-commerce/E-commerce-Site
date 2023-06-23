import React from "react";
import RatingsBreakdown from "./ratingsBreakdown.jsx";
import ReviewList from "./reviewList.jsx"
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const RatingsAndReview = ({currentProduct}) => {
  const [currentReviews, setCurrentReviews] = useState({});


  const reviewparams = {
    params : {
      product_id: 40344

    }
  }

  useEffect(() => {
    apiClient.get('/reviews/', reviewparams )
      .then((data) => {
        setCurrentReviews(data);

      })
      .catch((error) => {
        console.error(error);
      });
      apiClient.get('/reviews/meta', reviewparams )
      .then((data) => {
        console.log("review meta", data);

      })
      .catch((error) => {
        console.error(error);
      })
  }, [])



  return (
    <>
    <div class="row">
      <div class="oneThird">
        <RatingsBreakdown />
      </div>
      <div class="twoThirds">
        <ReviewList currentReviews={currentReviews}/>
      </div>

    </div>
    </>
  )
}

export default RatingsAndReview;