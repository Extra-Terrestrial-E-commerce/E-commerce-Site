import React from 'react';
const ExpandedView = ({imageUrl, selectNext, selectBefore, enableBefore, enableNext}) => {
  return(
    <div>
      {enableBefore && <button onClick ={selectBefore}>left</button> }
      <img src ={imageUrl}></img>
      {enableNext && <button onClick ={selectNext}>right</button>}
    </div>
  )
}
export default ExpandedView;