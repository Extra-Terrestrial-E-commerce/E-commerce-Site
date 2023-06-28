import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';

const ImageGallery = ({style}) => {
  const[mainImage, setMainImage] = React.useState(style.photos[0])
  const styles = {
    display:'flex',
    flexDirection:'column'
  }
  console.log('this is the img gal style, ', style);
  return (
    <div className='row'>
      <div className=''>
        {style.photos && style.photos.map((photo, i) => <ImgStyleIcon key ={i} photo ={photo}/>)}
        <button>down</button>
      </div>
      <div className=''>
        <button>left </button>
        <img src ={mainImage.thumbnail_url}/>
        <button> right </button>
      </div>
    </div>
  )
}


export default ImageGallery;
