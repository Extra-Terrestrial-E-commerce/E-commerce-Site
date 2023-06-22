import React from "react";
import ReactDOM from "react-dom";



/// static: product name, category, price, star rating + number of review;
// preview image: should be the same as the default image of the product description, extra: carousels through 4 images on hover;
// actionbutton: star on the top right, opens up the comparison modal comparing the item to the current product;
// these will populate our carousel.
const RelatedItemCard = ( {product} ) => {

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

  const handleComparison = () => {
    event.preventDefault();
    console.log('to do: comparison modal');
  }

  return (
    <div id="relatedItemContainer" style={containerStyle}>
      <button sytle={buttonStyle} type="submit" onClick={handleComparison}>compare</button>
      name:
      category:
      price:
      star rating + number of review:
    </div>
  )
}

// {
//   "id": 11,
//   "name": "Air Minis 250",
//   "slogan": "Full court support",
//   "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
//   "category": "Basketball Shoes",
//   "default_price": "0",
//   "features": [
//   {
//           "feature": "Sole",
//           "value": "Rubber"
//       },
//   {
//           "feature": "Material",
//           "value": "FullControlSkin"
//       },
//   // ...
//   ],
// }

export default RelatedItemCard;