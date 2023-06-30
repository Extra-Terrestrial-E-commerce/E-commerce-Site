import React from "react";
import RatingsBar from "./ratingBar.jsx";
import AllStars from "../Stars/AllStars.jsx";
import CharacteristicsBars from "./characteristicsBars.jsx";

const RatingsBreakdown = ({reviewMeta, filterHandler}) => {


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

  const getTotalRatings = (ratings) => {
    const five = Number(ratings['5']);
    const four = Number(ratings['4']);
    const three = Number(ratings['3']);
    const two = Number(ratings['2']);
    const one = Number(ratings['1']);
    return five+four+three+two+one;
  }

  const buttonStyle = {
        'backgroundColor': 'white',
        'border': '0px',
        'textDecoration': 'underline'
  }

  return (
    <div>
      <div class="row">
      <h1>{getAvRating(reviewMeta.ratings)}</h1>
      <h1>
      <AllStars rating={getAvRating(reviewMeta.ratings)}
      size={12}/>

      </h1>

      </div>
      <p>{getPercentRecommend(reviewMeta.recommended)}% of reviews recommend this product</p>

        <div class="row">
          <button style={buttonStyle} onClick={()=>{filterHandler(5)}}>5 stars </button>
          <RatingsBar completed={reviewMeta.ratings['5']/getTotalRatings(reviewMeta.ratings)*100}
          actualNumber={reviewMeta.ratings['5']}/>
        </div>
        <div class="row">
          <button style={buttonStyle} onClick={()=>{filterHandler(4)}}>4 stars </button>
          <RatingsBar completed={reviewMeta.ratings['4']/getTotalRatings(reviewMeta.ratings)*100}
          actualNumber={reviewMeta.ratings['4']}/>
        </div>
        <div class="row">
          <button style={buttonStyle} onClick={()=>{filterHandler(3)}}>3 stars </button>
          <RatingsBar completed={reviewMeta.ratings['3']/getTotalRatings(reviewMeta.ratings)*100}
          actualNumber={reviewMeta.ratings['3']}/>
        </div>
        <div class="row">
          <button style={buttonStyle} onClick={()=>{filterHandler(2)}}>2 stars </button>
          <RatingsBar completed={reviewMeta.ratings['2']/getTotalRatings(reviewMeta.ratings)*100}
          actualNumber={reviewMeta.ratings['2']}/>
        </div>
        <div class="row">
          <button style={buttonStyle} onClick={()=>{filterHandler(1)}}>1 star </button>
          <RatingsBar completed={reviewMeta.ratings['1']/getTotalRatings(reviewMeta.ratings)*100}
          actualNumber={reviewMeta.ratings['1']}/>
        </div>
        <br/>
        < CharacteristicsBars characteristics={reviewMeta.characteristics}/>



    </div>
  )
  }

  export default RatingsBreakdown;