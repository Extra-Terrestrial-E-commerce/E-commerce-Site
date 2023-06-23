import React from "react";
import ReviewListItem from "./reviewListItem.jsx";
import WriteReview from "./writeReview.jsx";

const ReviewList = () => {
  return (
    <div>
      <h2>248 reviews, sorted by relevance</h2>
      <p>Review List</p>
      <ReviewListItem />
      <ReviewListItem />
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