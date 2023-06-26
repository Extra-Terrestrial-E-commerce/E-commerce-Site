import React from "react";
import AllStars from "../Stars/AllStars.jsx";



const ReviewListItem = ({review}) => {

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

  // console.log("review", review);

  return (
    <div>
      <AllStars rating={review.stars}
      size={12}/>
      <p>{getMonthNumber(review.date)} {getDay(review.date)}, {review.date.slice(0, 4)}</p>
      <h2>{truncate(review.body)}</h2>
      <p>{review.body}</p>
      <div class="row">
        <p>Helpful?</p>
        <button>Yes</button>
        <button>No</button>
      </div>
      <p>_______________________________</p>
    </div>
  )
  }

  export default ReviewListItem;