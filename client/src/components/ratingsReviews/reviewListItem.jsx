import React from "react";

const ReviewListItem = ({review}) => {

  return (
    <div>
      <p>{review.rating}</p>
      <h2>{review.body}</h2>
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