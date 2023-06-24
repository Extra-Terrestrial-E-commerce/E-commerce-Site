import React from "react";

const ReviewListItem = ({review}) => {

  const truncate = (text) => {
    if (text.length > 30) {

      return text.slice(0, 30)+ '...';
    }
    return text;
  }

  return (
    <div>
      <p>{review.rating} stars </p>
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