import React from "react";
import AllStars from "../Stars/AllStars.jsx";
import apiClient from '../config/config.js';
const { useState } = React;



const ReviewListItem = ({review}) => {
  const [helpfulStatus, setHelpfulStatus] = useState(false);

  const getMonthName = (monthNumber) => {
    const date2 = new Date();
    date2.setMonth(monthNumber - 1);

    return date2.toLocaleString('en-US', { month: 'long' });
  }

  const getMonthNumber = (date) => {
    const newdate = new Date(date)
    const number = newdate.getMonth();
    return getMonthName(number)
  }

  const getDay = (date) => {
    const day = new Date(date);
    return day.getDate();
  }

  const truncate = (text) => {
    if (text.length > 30) {
      return text.slice(0, 60)+ '...';
    }
    return text;
  }

  const handleReviewHelpful = (e) => {
    setHelpfulStatus(true);
    apiClient.put(`/reviews/${review.review_id}/helpful`, {params: {review_id: review.review_id} } )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  const handleReviewReport = (e) => {
    setHelpfulStatus(true);
    console.log("helpfulStatus", helpfulStatus);
    apiClient.put(`/reviews/${review.review_id}/report`, {params: {review_id: review.review_id} } )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

  }

   console.log("review", review);


  return (
    <div>
      <div class="row">
        <p>
          <AllStars rating={review.stars}
          size={12}/>
        </p>

        {review.reviewer_name ? <p>{review.reviewer_name}  </p> : <p>Incognito</p>}
        <p>  {getMonthNumber(review.date)} {getDay(review.date)}, {review.date.slice(0, 4)}</p>


      </div>
      <h2>{truncate(review.body)}</h2>
      <p>{review.body}</p>
      {review.recommend && <p>I recommend this product</p>}
      <div class="row">
        <p>Helpful?</p>
        {helpfulStatus && <p>Thank you</p>}
        {helpfulStatus === false &&
        <>
          <button onClick={handleReviewHelpful}>Yes </button>
          <button onClick={handleReviewReport}>No </button>
        </>
        }

      </div>
      <p>_______________________________</p>
    </div>
  )
  }

  export default ReviewListItem;