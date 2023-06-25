import React from "react";
import RatingsBreakdown from "./ratingsBreakdown.jsx";
import ReviewList from "./reviewList.jsx"
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const RatingsAndReview = ({currentProduct}) => {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [reveiwParams, setReviewParams] = useState({ params: {product_id: 0}})

  var reviewparams = {
  var reviewparams = {
    params : {
      product_id: currentProduct.id
      product_id: currentProduct.id

    }
  }


  useEffect(() => {
    apiClient.get('/reviews/', reviewparams )
      .then((data) => {
        setCurrentReviews(data.data['results']);
      })
      .catch((error) => {
        console.error(error);
      });
      apiClient.get('/reviews/meta', reviewparams )
      .then((data) => {
        setReviewMeta(data.data);

      })
      .catch((error) => {
        console.error(error);
      })
  }, [currentProduct])
  }, [currentProduct])


  return (
    <>
    <div class="row">
      <div class="oneThird">
        {reviewMeta.ratings &&
        <RatingsBreakdown
        reviewMeta={reviewMeta}/>}

      </div>
      <div class="twoThirds">
        <ReviewList
        currentReviews={currentReviews}
        currentProduct={currentProduct}/>
      </div>

    </div>
    </>
  )
}


export default RatingsAndReview;