import React from 'react';

const ProductOverview = ({product}) => {
  return (
    <div>
      <h3>{product.slogan}</h3>
      <p> {product.description}
      </p>
    </div>
  )
}

export default ProductOverview;
