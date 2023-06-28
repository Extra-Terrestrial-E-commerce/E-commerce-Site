import React from 'react';
import {ImCheckmark} from 'react-icons/im'

const Style = ({style, setStyle, selected}) => {

  return (
    <div className='style-parent'>
      {selected &&
        <ImCheckmark className='checkmark'/>
      }
      <img className='style-thumbnail' src={style.photos[0].thumbnail_url} onClick ={()=> setStyle(style)}/>
    </div>
  )
}

export default Style;