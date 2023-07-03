import React from 'react';
import apiClient from '../../config/config.js';
import AllStars from '../../Stars/AllStars.jsx';
const ProductInfo = ({product}) => {
  const[starRating, setStarRating] = React.useState(null);
  const[totalReviews, setTotalReviews] = React.useState(null);
  const starStyles = {
    color:'white'
  }

  const aggregate = (objectOfReviews) => {
    var count = 0;
    var total = 0;
    for (let key in objectOfReviews) {
      count = count +  parseInt(objectOfReviews[key]);
      total = total + (key * objectOfReviews[key]);
    }
    return [count, total];
  }

  React.useEffect(() => {
    if (product.id) {
      apiClient.get('/reviews/meta', { params: {product_id: product.id} })
        .then((data) => {
          var ratings = data.data.ratings;
          var aggregatedData = aggregate(ratings);
          var stars = aggregatedData[1]/aggregatedData[0];
          setStarRating(stars.toFixed(2));
          var totalReviews = aggregatedData[0];
          setTotalReviews(totalReviews);
        })
        .catch((error) => {
          console.log('get review meta failed, ',error);
        })
    }
  }, [product])
  return (
    <div className='overview'>
      <div className='stars-reviews'>
      {starRating &&<AllStars rating={starRating} size={16} /> }
      {totalReviews && <a href='#RatingsAndReview'>Read all {totalReviews} reviews</a>}
      </div>

      <div>{product.category}</div>
      <h3>{product.name}</h3>
      <p>{product.default_price}</p>
    </div>
  )
}

export default ProductInfo;
