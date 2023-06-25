import React from 'react';

const Style = ({style}) => {
  console.log('this is the style: ', style);
  return (
    <img src={style.photos[0]}/>
  )
}

export default Style;