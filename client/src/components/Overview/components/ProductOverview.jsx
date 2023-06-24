import React from 'react';
import Socials from './Socials.jsx';
const ProductOverview = ({product}) => {
  return (
    <div>
      <h3>{product.slogan}</h3>
      <p> {product.description}</p>
      <Socials slogan = {product.slogan} />
    </div>
  )
}

export default ProductOverview;
