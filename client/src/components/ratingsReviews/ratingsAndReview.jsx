import React from "react";
import RatingsBreakdown from "./ratingsBreakdown.jsx";
import ReviewList from "./reviewList.jsx"

const RatingsAndReview = () => {
  return (
    <>
    <div class="row">
      <div class="oneThird">
        <RatingsBreakdown />
      </div>
      <div class="twoThirds">
        <ReviewList />
      </div>
      <button class="btn">Button</button>

    </div>
    </>
  )
}

export default RatingsAndReview;