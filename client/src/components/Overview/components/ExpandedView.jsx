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
      {enableBefore && <button onClick ={selectBefore}>left</button> }
      <img id ='main-img-expanded' src ={imageUrl} style={zoomInStyle()} onClick={()=> setZoomIn(!zoomIn)}></img>
      {enableNext && <button onClick ={selectNext}>right</button>}
      <div style ={expandedThumbnailStyles}>
        {thumbNailGallery('thumbnail')}
      </div>
    </div>
  )
}
export default ExpandedView;