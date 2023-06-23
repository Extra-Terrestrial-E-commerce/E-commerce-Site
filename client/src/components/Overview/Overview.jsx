import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import ProductOverview from './components/ProductOverview.jsx';
import ProductStyle from './components/ProductStyle.jsx'
import ImageGallery from './components/ImageGallery.jsx'
const Overview = ({currentProduct}) => {
  console.log('this is the current product object', currentProduct);
  return (
    <div className='overview'>
      the following are components of overview:
      <ImageGallery/>
      <ProductInfo product ={currentProduct}/>
      <ProductStyle/>
      <ProductOverview product={currentProduct}/>

    </div>
  )
}

export default Overview;