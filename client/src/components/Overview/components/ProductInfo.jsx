import React from 'react';

const ProductInfo = ({product}) => {

  const starStyles = {
    color:'white'
  }

  console.log('this is the product, ', product);
  return (
    <div className='overview'>
      <span>stars</span>
      <a href='#RatingsAndReview'>Read all reviews</a>
      <div>{product.category}</div>
      <h3>{product.name}</h3>
      <p>{product.default_price}</p>
    </div>
  )
}

export default ProductInfo;
