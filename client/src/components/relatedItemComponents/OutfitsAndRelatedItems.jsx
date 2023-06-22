import React from "react";
import ReactDOM from "react-dom";
import RelatedItems from "./RelatedItems.jsx";
import Outfits from "./Outfits.jsx";

const OutfitsAndRelatedItems = () => {
  return (
    <>
      <div>
        <RelatedItems />
      </div>
      <div>
        <Outfits />
      </div>
    </>
  )
}

export default OutfitsAndRelatedItems;