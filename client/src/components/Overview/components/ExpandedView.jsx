import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';
const ExpandedView = ({imageUrl, selectNext, selectBefore, enableBefore, enableNext, thumbNailGallery}) => {
  const [zoomIn, setZoomIn] = React.useState(false);

  const zoomInStyle = () => {
    if (zoomIn) {
      return {transform: 'scale(2.5)'};
    }
  }
  const expandedThumbnailStyles = {
    display:'flex',
    flexDirection: 'row'
  }
  return(
    <div>
      {enableBefore && !zoomIn&& <button onClick ={selectBefore}>left</button> }
      <div className='image-container'>
        <img
          id ={zoomIn ? 'main-img-zoom-in': 'main-img-zoom-out'}
          src ={imageUrl}
          style={zoomInStyle()}
          onClick={()=> setZoomIn(!zoomIn)}
        />
      </div>

      {enableNext && !zoomIn&& <button onClick ={selectNext}>right</button>}
      {!zoomIn && <div style ={expandedThumbnailStyles}>
        {thumbNailGallery('thumbnail')}
      </div>}
    </div>
  )
}
export default ExpandedView;