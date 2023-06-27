import React from "react";
import RatingsBreakdown from "./ratingsBreakdown.jsx";
import ReviewList from "./reviewList.jsx"
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const RatingsAndReview = ({currentProduct}) => {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [sortParam, setSortParam] = useState("relevant");

  var reviewparams = {
    params : {
      product_id: currentProduct.id,
      sort: sortParam
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
  }, [currentProduct, sortParam])

  console.log(currentReviews);


  return (
    <>
    <div class="row">
      <div class="oneThird">
        {reviewMeta.ratings &&
        <RatingsBreakdown
        reviewMeta={reviewMeta}/>}

      </div>
      <div class="twoThirds">
        {currentReviews.length &&
        <ReviewList
        currentProduct={currentProduct}
        currentReviews={currentReviews}
        setSortParam={setSortParam}
        />}
      </div>

    </div>
    </>
  )
}


export default RatingsAndReview;