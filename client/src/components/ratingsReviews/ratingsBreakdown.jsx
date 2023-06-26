import React from "react";
import RatingsBar from "./ratingBar.jsx";

const RatingsBreakdown = ({reviewMeta}) => {
  console.log("review meta", reviewMeta);

  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <h1>3.5</h1>
      <p>100% of reviews recommend this product</p>

        <div class="row">
          <p>5 stars </p>
          <RatingsBar completed={reviewMeta.ratings['5']}/>
        </div>
        <div class="row">
          <p>4 stars </p>
          <RatingsBar completed={reviewMeta.ratings['4']}/>
        </div>
        <div class="row">
          <p>3 stars </p>
          <RatingsBar completed={reviewMeta.ratings['3']}/>
        </div>
        <div class="row">
          <p>2 stars </p>
          <RatingsBar completed={reviewMeta.ratings['2']}/>
        </div>
        <div class="row">
          <p>1 star </p>
          <RatingsBar completed={reviewMeta.ratings['1']}/>
        </div>
        <br/>
        <p>Size</p>
        <p>Comfort</p>



    </div>
  )
  }

  export default RatingsBreakdown;