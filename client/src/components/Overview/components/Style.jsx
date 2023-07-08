import React from 'react';

const Style = ({style, setStyle, selected}) => {

  return (
    <div className='style-parent'>
      {selected &&
        <div className='checkmark'>&#10003;</div>
      }
      <img className='style-thumbnail' src={style.photos[0].thumbnail_url} onClick ={()=> setStyle(style)}/>
    </div>
  )
}

export default Style;