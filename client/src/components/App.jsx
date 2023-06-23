import React from "react";
import ReactDOM from "react-dom";
const { useState } = React;
import OutfitsAndRelatedItems from "./relatedItemComponents/OutfitsAndRelatedItems.jsx";
import Overview from "./Overview/Overview.jsx";
import RatingsAndReview from "./ratingsReviews/ratingsAndReview.jsx";
const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <>
      <div>hello world, mars</div>
      <div class="section">
        <Overview />
      </div>
      <div class="section">
        <OutfitsAndRelatedItems currentProduct={currentProduct} />
      </div>
      <div class="section">Questions and Answers</div>
      <div class="section">
        <RatingsAndReview />
      </div>
    </>
  )
}

export default App;