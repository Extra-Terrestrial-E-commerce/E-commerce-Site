import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';

const ImageGallery = ({style}) => {
  const[mainImageId, setMainImageId] = React.useState(0);
  const[styleStart, setStyleStart] = React.useState(0);
  const LIST_MAX = 7;
  const thumbNailStyles = {
    display:'flex',
    flexDirection: 'column'
  }
  const updatingMainImage = (id) => {
    setMainImageId(id);
  }
  const moveDown = () => {
    if (styleStart < style.photos.length -1 ) {
      setStyleStart(styleStart + 1);
    }
  }
  const moveUp = () => {
    setStyleStart(styleStart -1);
  }
  const selectBefore = () => {
    setMainImageId(mainImageId - 1)
  }

  const selectNext = () => {
    setMainImageId(mainImageId + 1);
  }
  return (
    <div  className='row'>

      <div style ={thumbNailStyles} className=''>
        {styleStart > 0 && <button onClick={moveUp}>up</button> }

        {style.photos && style.photos.slice(styleStart, styleStart + 7).map((photo, id) => <ImgStyleIcon
        key ={id}
        id={id}
        photo ={photo}
        updatingMainImage={updatingMainImage}
        selected = {id === mainImageId}
        />
        )}
        {style.photos.length > LIST_MAX && <button onClick={moveDown}>down</button>}
      </div>
      <div className=''>
        {mainImageId > 0 && <button onClick ={selectBefore}>left </button>}
        <img src ={style.photos[mainImageId].thumbnail_url}/>
        {mainImageId < style.photos.length -1 && <button onClick ={selectNext}> right </button>}
      </div>
    </div>
  )
}


export default ImageGallery;
