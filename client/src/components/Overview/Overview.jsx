import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import ProductOverview from './components/ProductOverview.jsx';
import ProductStyle from './components/ProductStyle.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import apiClient from '../config/config.js';

const Overview = ({currentProduct}) => {

  const[styles, setStyles] = React.useState([]);

  React.useEffect(() => {
    if (Object.keys(currentProduct).length) {
      console.log(currentProduct.id)
      apiClient.get(`/products/${currentProduct.id}/styles`)
        .then(result => setStyles(result.data.results))
        .catch(err => console.log('failed to get styles, ', err));
    }
  }, [currentProduct])

  console.log(styles);

  return (
    <div className='overview'>
      <ImageGallery/>
      <ProductInfo product ={currentProduct}/>
      <ProductStyle styles ={styles}/>
      <ProductOverview product={currentProduct}/>

    </div>
  )
}

export default Overview;