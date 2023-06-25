import React from 'react';
import Style from './Style.jsx'
const ProductStyle = ({styles}) => {
  const[selectedStyle, setSelectedStyle] = React.useState({});
  return (
    <div className ='overview'>
      <span>Style > </span>
      <span>Style Selected</span>
      <div>
        {styles.length && <Style style ={styles[0]} />}
      </div>

    </div>
  )
}
export default ProductStyle;
