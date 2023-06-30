import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./relatedItems/RelatedItems.jsx";
import OutfitItems from "./outfitItems/OutfitItems.jsx";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';
import AllStars from '../Stars/AllStars.jsx';

const OutfitsAndRelatedItems = ( {currentProduct, setCurrentProduct} ) => {
  const temp = {
    margin: '10px',
    padding: '10px'
  }

  return (
    <>
      <div style={temp} >
        Related Items
        <RelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} />
      </div>
      <div style={temp}>
        Your Outfit
        <OutfitItems currentProduct={currentProduct} />
      </div>
    </>
  )
}

export default OutfitsAndRelatedItems;