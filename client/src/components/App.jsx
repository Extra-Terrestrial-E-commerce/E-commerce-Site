import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import OutfitsAndRelatedItems from "./relatedItemComponents/OutfitsAndRelatedItems.jsx";
import Overview from "./Overview/Overview.jsx";
import RatingsAndReview from "./ratingsReviews/ratingsAndReview.jsx";
import apiClient from './config/config.js';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    apiClient.get('/products')
      .then((data) => {
        setCurrentProduct(data.data[2]);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  return (
    <>
      <div>hello world, mars</div>
      <div class="section">
        <Overview currentProduct={currentProduct}/>
      </div>
      <div class="section">
        <OutfitsAndRelatedItems currentProduct={currentProduct} />
      </div>
      <div class="section">Questions and Answers</div>
      <div class="section">
        <RatingsAndReview currentProduct={currentProduct}/>
      </div>
    </>
  )
}

export default App;