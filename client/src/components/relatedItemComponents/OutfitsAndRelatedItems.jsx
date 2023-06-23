import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./RelatedItems.jsx";
import OutfitItems from "./OutfitItems.jsx";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

const OutfitsAndRelatedItems = ( {currentProduct} ) => {

  console.log(currentProduct);

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