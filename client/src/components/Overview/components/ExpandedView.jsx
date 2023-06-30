import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';
const ExpandedView = ({imageUrl, selectNext, selectBefore, enableBefore, enableNext, thumbNailGallery}) => {
  const expandedThumbnailStyles = {
    display:'flex',
    flexDirection: 'row'
  }
  return(
    <div>
      {enableBefore && <button onClick ={selectBefore}>left</button> }
      <img src ={imageUrl}></img>
      {enableNext && <button onClick ={selectNext}>right</button>}
      <div style ={expandedThumbnailStyles}>
        {thumbNailGallery('thumbnail')}
      </div>
    </div>
  )
}
export default ExpandedView;