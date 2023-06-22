import React from "react";
import RatingsBreakdown from "./ratingsBreakdown.jsx";
import ReviewList from "./reviewList.jsx"

const RatingsAndReview = () => {
  return (
    <div>
      <RatingsBreakdown />
    </div>
    <div>
      <ReviewList />
    </div>
  )
}

export default RatingsAndReview;