import React from 'react';
import QuantityAndSize from './QuantityAndSize.jsx'
const ProductCheckout = ({style}) => {
  if (style) {
    console.log('these are the skus, ', style.skus);

  }
  return (
    <div>
      {style && <QuantityAndSize skus = {style.skus} />}
      <button>
        Add to Cart
      </button>

    </div>
  )
}


export default ProductCheckout;