import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import ProductOverview from './components/ProductOverview.jsx';
import ProductStyle from './components/ProductStyle.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import apiClient from '../config/config.js';
import ProductCheckout from './components/ProductCheckout.jsx';

const Overview = ({currentProduct}) => {

  const[styles, setStyles] = React.useState([]);
  const[selectedStyle, setSelectedStyle] = React.useState({});

  React.useEffect(() => {
    if (Object.keys(currentProduct).length) {
      apiClient.get(`/products/${currentProduct.id}/styles`)
        .then(result => setStyles(result.data.results))
        .catch(err => console.log('failed to get styles, ', err));
    }
  }, [currentProduct])

  return (
    <div className='overview'>


      {selectedStyle.name && <ImageGallery style = {selectedStyle}/>}
      <ProductInfo product ={currentProduct}/>
      <ProductStyle styles ={styles} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle}/>
      <ProductOverview product={currentProduct}/>


    </div>

  )



}

export default Overview;