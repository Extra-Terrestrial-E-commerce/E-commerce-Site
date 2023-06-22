import React from "react";
import ReactDOM from "react-dom";
const { useState } = React;
import OutfitsAndRelatedItems from "./relatedItemComponents/OutfitsAndRelatedItems.jsx";
import Overview from "./Overview/Overview.jsx";
const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <>
      <div>hello world, mars</div>
      <div>

        <Overview />
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