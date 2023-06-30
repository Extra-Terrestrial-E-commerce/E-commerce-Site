import React from "react";
import AllStars from "../Stars/AllStars.jsx";
import apiClient from '../config/config.js';
const { useState, useEffect } = React;



const ReviewListItem = ({review}) => {
  const [helpfulStatus, setHelpfulStatus] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const styles = {
    width: '100px',
    height:'100px',
    borderRadius: '10%',
    margin:'5px'
  }
  const styles = {
    width: '100px',
    height:'100px',
    borderRadius: '10%',
    margin:'5px'
  }

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

  const buttonStyle = {
    'backgroundColor': 'white',
    'border': '0px',
    'textDecoration': 'underline'
}

  return (
    <div>
      <div class="row">
        <p>
          <AllStars rating={review.stars}
          size={12}/>
        </p>
        <div className="row" style={{'position': 'relative', 'left': '350px'}}>
        {review.reviewer_name ? <p>{review.reviewer_name}  </p> : <p>Incognito</p>}
        <p>  {getMonthNumber(review.date)} {getDay(review.date)}, {review.date.slice(0, 4)}</p>

        </div>


        </div>



      </div>
      <h2>{truncate(review.body)}</h2>
      {showMore ? <p>{review.body}</p> : <p>{`${review.body.substring(0, 251)}`}</p>}
      {review.body.length > 250 & showMore === false ? <button style={buttonStyle} onClick={()=>{setShowMore(true)}}>Read More</button> : <p></p> }
      {review.body.length > 250 & showMore === true ? <button style={buttonStyle} onClick={()=>{setShowMore(false)}}>Read Less</button> : <p></p>}
      {review.body.length > 250 & showMore === false ? <button style={buttonStyle} onClick={()=>{setShowMore(true)}}>Read More</button> : <p></p> }
      {review.body.length > 250 & showMore === true ? <button style={buttonStyle} onClick={()=>{setShowMore(false)}}>Read Less</button> : <p></p>}
      {review.recommend && <p>I recommend this product</p>}
      {review.photos && review.photos.map((photo) => <img style={styles} id={photo.id} src={photo.url}/>)}
      <div class="row">
        <p>Helpful?</p>
        {helpfulStatus && <p>Thank you</p>}
        {helpfulStatus === false &&
        <>
          <button style={buttonStyle} onClick={handleReviewHelpful}>Yes </button>
          <button style={buttonStyle} onClick={handleReviewReport}>No </button>
          <button style={buttonStyle} onClick={handleReviewHelpful}>Yes </button>
          <button style={buttonStyle} onClick={handleReviewReport}>No </button>
        </>
        }

      </div>
    </div>
  )
  }

  export default ReviewListItem;