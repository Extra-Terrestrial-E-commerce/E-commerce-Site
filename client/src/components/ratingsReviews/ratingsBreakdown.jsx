import React from "react";
import RatingsBar from "./ratingBar.jsx";

const RatingsBreakdown = ({reviewMeta}) => {
  console.log("review meta", reviewMeta);
  const getPercentRecommend = (recommend) =>{
    const noRec = Number(recommend.false);
    const yesRec = Number(recommend.true);
    return Math.floor((yesRec / (noRec + yesRec)) * 100);
  }

  const getAvRating = (ratings) => {
    const five = Number(ratings['5']);
    const four = Number(ratings['4']);
    const three = Number(ratings['3']);
    const two = Number(ratings['2']);
    const one = Number(ratings['1']);
    const total = five+four+three+two+one;
    const average = (5*five + 4*four + 3*three + 2*two + one)/total;
    return average.toFixed(1);
  }

  return (
    <div>
      <h3>RATINGS & REVIEWS</h3>
      <h1>{getAvRating(reviewMeta.ratings)}</h1>
      <p>{getPercentRecommend(reviewMeta.recommended)}% of reviews recommend this product</p>

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