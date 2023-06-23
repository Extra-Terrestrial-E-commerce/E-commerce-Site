import React from "react";
import ReviewListItem from "./reviewListItem.jsx";
import WriteReview from "./writeReview.jsx";

const ReviewList = ({currentReviews}) => {
  console.log("reviewList", currentReviews);


  return (
    <div>
      <h2>248 reviews, sorted by relevance</h2>
      <p>Review List</p>
      {/* {currentReviews.results.map((review) => {
        <ReviewListItem review={review}/>
      })} */}
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