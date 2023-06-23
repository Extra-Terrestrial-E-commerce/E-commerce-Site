import React from "react";

const WriteReview = () => {
  return (
    <div>
      <form>
        <input placeholder="star rating"></input>
        <br/>
        <input placeholder="title"></input>
        <br />
        <input placeholder="description"></input>
        <br/>
        <div class="row">
          <input placeholder="size"></input>
          <input placeholder="confort"></input>
        </div>

      </form>
    </div>
  )
  }

  export default WriteReview;