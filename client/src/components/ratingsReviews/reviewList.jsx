import React from "react";
import ReviewListItem from "./reviewListItem.jsx";
import WriteReview from "./writeReview.jsx";
const { useState, useEffect } = React;

const ReviewList = ({currentReviews}) => {

  return (
    <div>
      <h2>{currentReviews.length} reviews, sorted by nothing yet!</h2>
      <p>Review List</p>
      {currentReviews && currentReviews.map((review) => {
        return(
          <ReviewListItem review={review}
          key={review.review_id} />
        )
      })}
      <div class="row">
        <button>MORE REVIEWS</button>
        <button>ADD A REVIEW</button>
      </div>
      <br/>
      <WriteReview />
    </div>
  )
  }

  export default ReviewList;