import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./relatedItems/RelatedItems.jsx";
import OutfitItems from "./outfitItems/OutfitItems.jsx";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';
import AllStars from '../Stars/AllStars.jsx';

const OutfitsAndRelatedItems = ( {currentProduct} ) => {


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