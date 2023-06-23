import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./RelatedItems.jsx";
import OutfitItems from "./OutfitItems.jsx";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const OutfitsAndRelatedItems = ( {currentProduct} ) => {

  useEffect(() => {
    apiClient.get('/products', { params: {count: 20} } )
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])


  return (
    <>
      <div>
        <RelatedItems currentProduct={currentProduct} />
      </div>
      <div>
        <OutfitItems currentProduct={currentProduct} />
      </div>
    </>
  )
}

export default OutfitsAndRelatedItems;