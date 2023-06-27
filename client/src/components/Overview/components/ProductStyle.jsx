import React from 'react';
import Style from './Style.jsx'
import ProductCheckout from './ProductCheckout.jsx'
const ProductStyle = ({styles}) => {
  const[selectedStyle, setSelectedStyle] = React.useState({});

  React.useEffect (() => {
    if (styles.length) {
      var defaultStyle = styles.find(style => style['default?']);
      if(!defaultStyle) {
        setSelectedStyle(styles[0]);
      } else {
        setSelectedStyle(defaultStyle);
      }
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
        {styles.length && styles.map((style, i) =>
          <Style
            style ={style}
            setStyle = {setStyle}
            selected ={style.style_id === selectedStyle.style_id}
            key={style.style_id}/>
        )}
      </div>
      <ProductCheckout skus = {selectedStyle.skus} id={selectedStyle.style_id}/>

    </div>
  )
}
export default ProductStyle;
