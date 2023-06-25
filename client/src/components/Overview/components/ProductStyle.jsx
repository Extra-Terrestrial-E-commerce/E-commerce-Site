import React from 'react';
import Style from './Style.jsx'
const ProductStyle = ({styles}) => {
  const[selectedStyle, setSelectedStyle] = React.useState({});
  return (
    <div className ='overview'>
      <span>Style > </span>
      <span>Style Selected</span>
      <div className='style-display'>
        {styles.length && styles.map(style => <Style style ={style} />)}
      </div>

    </div>
  )
}
export default ProductStyle;
