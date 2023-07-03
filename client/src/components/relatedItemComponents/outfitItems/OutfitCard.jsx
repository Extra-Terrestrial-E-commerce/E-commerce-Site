import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import apiClient from '../../config/config.js';
import AllStars from '../../Stars/AllStars.jsx';
import XButton from './XButton.jsx';

const OutfitCard = ( {product, allOutfitItems, setAllOutfitItems, currentProduct} ) => {
  const [numberOfReviews, setNumberOfReviews] = useState(null);
  const [starRating, setStarRating] = useState(null);

  const aggregate = (objectOfReviews) => {
    var count = 0;
    var total = 0;
    for (let key in objectOfReviews) {
      count = count +  parseInt(objectOfReviews[key]);
      total = total + (key * objectOfReviews[key]);
    }
    return [count, total];
  }

  useEffect(() => {
    if (product.id) {
      apiClient.get('/reviews/meta', { params: {product_id: product.id} })
        .then((data) => {
          var ratings = data.data.ratings;
          var aggregatedData = aggregate(ratings);
          setNumberOfReviews(aggregatedData[0]);
          var stars = aggregatedData[1]/aggregatedData[0];
          setStarRating(stars.toFixed(2));

        })
        .catch((error) => {
          console.error(error);
        })
    }
  }, [product])



  const containerStyle = {
    width: '100px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column'
  }

  const outfitItemButtonStyle = {
    position: 'relative',
    textAlign: 'right',
    top: '5px',
    right: '5px',
  }

  const handleRemove = () => {
    event.preventDefault();
    const updatedItems = allOutfitItems.filter(item => item.id !== product.id);
    setAllOutfitItems(updatedItems);
  };


  return (
    <div id="relatedItemContainer" >
      <div id="compareButton">
        <XButton size={10} toDoOnClick={handleRemove} />
      </div>
      <p>
        {product.category}
      </p>
      <p>
        {product.name}
      </p>
      <p>
        {product.default_price}
      </p>
      <div>
        {starRating && <AllStars rating={starRating} size={12} />}
      </div>
    </div>
  )
}

export default OutfitCard;