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
      <span>Style > </span>
      <span>Style Selected</span>
      <div className='style-display'>
        {styles.length && styles.map(style => <Style style ={style} />)}
      </div>
      <ProductCheckout/>
    </div>
  )
}
export default ProductStyle;
