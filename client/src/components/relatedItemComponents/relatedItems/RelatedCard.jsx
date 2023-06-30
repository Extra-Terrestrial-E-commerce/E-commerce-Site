import React from "react";
import ReactDOM from "react-dom";
const { useEffect } = React;
import apiClient from '../../config/config.js';
import AllStars from '../../Stars/AllStars.jsx';
import OneStar from '../../Stars/OneStar.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedCard = ( {product, currentProduct, isAnyComparing, setIsAnyComparing, setCurrentProduct} ) => {
  const [starRating, setStarRating] = React.useState(null);
  const [isComparing, setIsComparing] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(null);
  const [styles, setStyles] = React.useState(null);


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
          console.log(data.data);
          var ratings = data.data.ratings;
          var aggregatedData = aggregate(ratings);
          var stars = aggregatedData[1]/aggregatedData[0];
          setStarRating(stars.toFixed(2));
        })
        .catch((error) => {
          console.error(error);
        })
      apiClient.get(`/products/${product.id}/styles`)
        .then(result => setStyles(result.data.results))
        .catch(err => console.log('failed to get styles, ', err));
    }
  }, [product])

  React.useEffect (() => {
    if (styles) {
      var defaultStyle = styles.find(style => style['default?']);
      if(!defaultStyle) {
        setImageUrl(styles[0].photos[0].thumbnail_url);
      } else {
        setImageUrl(defaultStyle.photos[0].thumbnail_url);
      }
    }
  }, [styles])



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

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '67%',
  }

  const imageContainerSyle = {
    maxWidth: '100%',
    flex: '0 0 67%',
    padding: '10px'
  }

  const handleComparison = (event) => {
    event.stopPropagation();
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
      <div style={imageContainerSyle} id="previewImage">
        <img style={imageStyle} src={imageUrl} />
      </div>
      <div id="productInfo">
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
    </div>
  )
}

export default RelatedCard;