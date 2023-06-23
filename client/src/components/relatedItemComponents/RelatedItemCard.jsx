import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import apiClient from '../config/config.js';

/// static: product name, category, price, star rating + number of review;
// preview image: should be the same as the default image of the product description, extra: carousels through 4 images on hover;
// actionbutton: star on the top right, opens up the comparison modal comparing the item to the current product;
// these will populate our carousel.
const RelatedItemCard = ( {product} ) => {
  const [numberOfReviews, setNumberOfReviews] = useState('');
  const [starRating, setStarRating] = useState('');

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
      <p>
        {product.category}
      </p>
      <p>
        {product.name}
      </p>
      <p>
        {product.default_price}
      </p>
      <p>
        {starRating}
      </p>
    </div>
  )
}

export default RelatedItemCard;