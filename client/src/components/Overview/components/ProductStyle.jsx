import React from 'react';
import Style from './Style.jsx'
const ProductStyle = ({styles}) => {

  return (
    <div className ='overview'>
      <span>Style > </span>
      <span>Style Selected</span>
      <div>
        {styles.map(style => <Style  style={style}/>)}
      </div>

    </div>
  )
}
export default ProductStyle;
