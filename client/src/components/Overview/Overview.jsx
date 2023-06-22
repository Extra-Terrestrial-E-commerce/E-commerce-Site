import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import ProductOverview from './components/ProductOverview.jsx';
const Overview = () => {

  return (
    <div className='overview'>
      the following are components of overview:
      <ProductInfo/>
      <ProductOverview/>
    </div>
  )
}

export default Overview;