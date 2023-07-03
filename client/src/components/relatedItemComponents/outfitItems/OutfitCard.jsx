import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import apiClient from '../../config/config.js';
import AllStars from '../../Stars/AllStars.jsx';
import XButton from './XButton.jsx';

const OutfitCard = ( {product, allOutfitItems, setAllOutfitItems, currentProduct} ) => {
  const [numberOfReviews, setNumberOfReviews] = useState(null);
  const [starRating, setStarRating] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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
      apiClient.get(`/products/${product.id}/styles`)
        .then(result => {
          var styles = result.data.results;
          var defaultStyle = styles.find(style => style['default?']);
          if(!defaultStyle) {
            setImageUrl(styles[0].photos[0].thumbnail_url);
          } else {
            setImageUrl(defaultStyle.photos[0].thumbnail_url);
          }
        })
        .catch(err => console.log('failed to get styles, ', err));

    }
  }, [product])

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
      <div id="previewImage">
        <img id="relatedCardThumbnail" src={imageUrl} />
      </div>
      <div id="productInfo">
        <span id="productCategory">
          {product.category}
        </span>
        <span id="productName">
          {product.name}
        </span>
        <span id="pruductPrice">
          {product.default_price}
        </span>
        <div id="productStars">
          {starRating && <AllStars rating={starRating} size={12} />}
        </div>
      </div>
    </div>
  )
}


// div role="relatedItemCard" id="relatedItemContainer" onClick={(event) => {
//   handleProductChange(event)
//   }
// } >
//   <div data-testid="comparisonModalContainer" style={comparisonStyle}>
//     <ComparisonModal product={product} currentProduct={currentProduct} />
//   </div>
//   <span role="openCompare" id="compareButton" onClick={(event) => {
//       handleComparison(event);
//     }}>
//       <OneStar percentFill={0} size={15} />
//   </span>

// </div>

export default OutfitCard;