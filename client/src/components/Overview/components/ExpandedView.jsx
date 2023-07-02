import React from 'react';
import ImgStyleIcon from './ImgStyleIcon.jsx';
const ExpandedView = ({imageUrl, selectNext, selectBefore, enableBefore, enableNext, thumbNailGallery}) => {
  const [zoomIn, setZoomIn] = React.useState(false);
  const [touch, setTouch] = React.useState({x:0, y:0});
  const [movement, setMovement] = React.useState({deltaX: 0, deltaY:0})
  const zoomInStyle = {
    'transform-origin':`${touch.x}px ${touch.y}px`,
    transform: `scale(2.5) translateX(${movement.deltaX * -1}px) translateY(${movement.deltaY * -1}px)`
  };
  const expandedThumbnailStyles = {
    display:'flex',
    flexDirection: 'row'
  }

  const handleClick = (e) => {
    setTouch({x:e.clientX, y: e.clientY});
    setZoomIn(!zoomIn);
  }

  const handleMouseMovement = (e) => {

    setMovement({deltaX: e.clientX - touch.x, deltaY: e.clientY - touch.y})
  }

  return(
    <div>
      {enableBefore && !zoomIn&& <button onClick ={selectBefore}>left</button> }
      <div className='image-container'>
        {zoomIn ? <img
          className ='main-img-zoom-in'
          src ={imageUrl}
          style={zoomInStyle}
          onClick={()=> setZoomIn(!zoomIn)}
          onMouseMove={handleMouseMovement}
        /> :
        <img
          className ='main-img-zoom-out'
          src ={imageUrl}
          onClick={handleClick}
        />
        }
      </div>

      {enableNext && !zoomIn&& <button onClick ={selectNext}>right</button>}
      {!zoomIn && <div style ={expandedThumbnailStyles}>
        {thumbNailGallery('thumbnail')}
      </div>}
    </div>
  )
}
export default ExpandedView;