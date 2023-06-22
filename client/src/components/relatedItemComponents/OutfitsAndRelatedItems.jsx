import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel.jsx";
const { useState } = React;

const OutfitsAndRelatedItems = ( {currentProduct} ) => {
  return (
    <>
      <div>
        <Carousel bool={true} currentProduct={currentProduct} />
      </div>
      <div>
        Outfit carousel go brrrr
      </div>
    </>
  )
}

export default OutfitsAndRelatedItems;