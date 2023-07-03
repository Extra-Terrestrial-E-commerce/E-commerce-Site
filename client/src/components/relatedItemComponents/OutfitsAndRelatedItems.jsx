import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./relatedItems/RelatedItems.jsx";
import OutfitItems from "./outfitItems/OutfitItems.jsx";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';
import AllStars from '../Stars/AllStars.jsx';

import "../../stylesTwo.scss";

const OutfitsAndRelatedItems = ( {currentProduct, setCurrentProduct} ) => {

  if (localStorage.getItem('outfitItems') === null) {
    localStorage.setItem('outfitItems', '');
  }

  const temp = {
    margin: '10px',
    padding: '10px'
  }

  return (
    <>
      <div id='testId' >
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