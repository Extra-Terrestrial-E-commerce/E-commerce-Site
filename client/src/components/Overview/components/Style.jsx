import React from 'react';

const Style = ({style}) => {
  console.log('this is the style: ', style);
  return (
    <img className='style-thumbnail' src={style.photos[0].thumbnail_url}/>
  )
}

export default Style;