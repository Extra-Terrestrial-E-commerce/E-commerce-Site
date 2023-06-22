import React from "react";
import ReactDOM from "react-dom";

const OutfitCard = ( {product} ) => {

  const containerStyle = {
    width: '100px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column'
  }

  const buttonStyle = {
    position: 'relative',
    top: '5px',
    right: '5px',
  }

  return (
    <div id="relatedItemContainer" style={containerStyle}>
      <button sytle={buttonStyle} type="submit">remove</button>
      outfits nice
    </div>
  )
}

export default OutfitCard;