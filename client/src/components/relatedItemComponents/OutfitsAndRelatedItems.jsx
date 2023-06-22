import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./RelatedItems.jsx";
import OutfitItems from "./OutfitItems.jsx";
const { useState } = React;

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