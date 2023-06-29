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
        console.log(data);
        apiClient.get('/products/' + data.data[3].id)
          .then((data) => {
            setCurrentProduct(data.data);
          })
          .catch((error) => {
            console.error(error);
          })
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  return (
    <>
      <div>hello world, mars</div>
      <div class="section">
        {currentProduct.name && <Overview currentProduct={currentProduct}/>}
      </div>
      <div class="section">
        <OutfitsAndRelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
      </div>
      <div class="section">Questions and Answers</div>
      <div class="section">
       <a id="RatingsAndReview"></a>
       {currentProduct.name && <RatingsAndReview currentProduct={currentProduct}/>}

      </div>
    </>
  )
}

export default App;