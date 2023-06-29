import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import apiClient from '../../config/config.js';
import AllStars from '../../Stars/AllStars.jsx';
import OneStar from '../../Stars/OneStar.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedCard = ( {product, currentProduct, isAnyComparing, setIsAnyComparing, setCurrentProduct} ) => {
  const [numberOfReviews, setNumberOfReviews] = useState(null);
  const [starRating, setStarRating] = useState(null);
  const [isComparing, setIsComparing] = useState(false);

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

  const relatedItemButtonStyle = {
    position: 'relative',
    textAlign: 'right',
    top: '5px',
    right: '5px',
  }

  const comparisonStyle = {
    position: 'relative',
    display: isComparing ? 'flex' : 'none',
    top: '5px',
    right: '5px',
  }

  const handleComparison = (event) => {
    event.stopPropagation();
    console.log('booleans in handle compare: ', isAnyComparing, isComparing);
    if (!isAnyComparing) {
      if (!isComparing) {
        setIsComparing(true);
        setIsAnyComparing(true);
      }
    } else {
      if (isComparing) {
        setIsComparing(false);
        setIsAnyComparing(false);
      }
    }
  }

  const handleProductChange = (event) => {
    event.preventDefault();
    setCurrentProduct(product)
  }


  return (
    <div role="relatedItemCard" id="relatedItemContainer" style={containerStyle} onClick={(event) => {
      handleProductChange(event)
      }
    } >
      <div data-testid="comparisonModalContainer" style={comparisonStyle}>
        <ComparisonModal product={product} currentProduct={currentProduct} />
      </div>
      <div role="openCompare" style={relatedItemButtonStyle} onClick={(event) => {
        handleComparison(event);
      }}>
        <OneStar percentFill={0} size={15} />
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

export default RelatedCard;