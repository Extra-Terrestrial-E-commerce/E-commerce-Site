import React from 'react';
import Style from './Style.jsx'
import ProductCheckout from './ProductCheckout.jsx'
const ProductStyle = ({styles}) => {
  const[selectedStyle, setSelectedStyle] = React.useState({});

  React.useEffect (() => {
    if (styles.length) {
      var defaultStyle = styles.find(style => style['default?']);
      setSelectedStyle(defaultStyle);
    }
  }, [styles])
  const setStyle = (style) => {
    setSelectedStyle (style);
  }

  return (
    <div className ='overview'>
      <span>Style &#62; </span>
      <span>{selectedStyle.name}</span>
      <div className='style-display'>
        {styles.length && styles.map(style =>
          <Style style ={style} setStyle = {setStyle} selected ={style.style_id === selectedStyle.style_id}/>
        )}
      </div>
      <ProductCheckout/>
    </div>
  )
}
export default ProductStyle;
