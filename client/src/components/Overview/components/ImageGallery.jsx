import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';

const ImageGallery = ({style}) => {
  const[mainImageId, setMainImageId] = React.useState(0);

  console.log('this is the img gal style, ', style);

  const updatingMainImage = (id) => {
    setMainImageId(id);
  }
  return (
    <div className='row'>
      <div className='oneThird'>
        {style.photos && style.photos.map((photo, i) => <ImgStyleIcon
        key ={i}
        id={i}
        photo ={photo}
        updatingMainImage={updatingMainImage}
        selected ={i === mainImageId}
        />
        )}
        <button>down</button>
      </div>
      <div className=''>
        <button>left </button>
        <img src ={style.photos[mainImageId].thumbnail_url}/>
        <button> right </button>
      </div>
    </div>
  )
}


export default ImageGallery;
