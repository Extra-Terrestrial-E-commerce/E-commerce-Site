import React from 'react';
import {ImCheckmark} from 'react-icons/im'

const Style = ({style, setStyle, selected}) => {



  const handleClick = () => {
    setStyle(style);
  }

  return (
    <img className='style-thumbnail' src={style.photos[0].thumbnail_url}/>
    <div className='style-parent'>
      {selected &&
        <ImCheckmark className='checkmark'/>
      }
      <img className='style-thumbnail' src={style.photos[0].thumbnail_url} onClick ={handleClick}/>
    </div>
  )
}

export default Style;