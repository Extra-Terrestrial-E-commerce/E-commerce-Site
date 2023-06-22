import React from "react";
import ReactDOM from "react-dom";
import RelatedItemCard from "./RelatedItemCard.jsx";
import OutfitCard from "./OutfitCard.jsx";
const { useState, useEffect } = React;

const Carousel = ( {bool, currentProduct} ) => {
  const [productsOnDisplay, setProductsOnDisplay] = useState([{}, {}, {}, {}]);
  const [allProducts, setAllProducts] = useState([{}, {}, {}, {}, {}]);
  //// okay so we have five products being insantiated, what we want to do is pass these as all Products instead and from all products we get the products on display;
  // we might need a current leftmost for the carousel to know when to display the right and left buttons.

  const carouselStyle = {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'row'
  }
  const scrollButton = {
    height: '100%',
    width: '5px'
  }

  const scrollLeft = () => {
    console.log('scrolling left');
  }

  const scrollRight = () => {
    console.log('scrolling right');
  }

  var counter = 0;
  return (
    <>
      <div style={carouselStyle}>
        <button style={scrollButton} type="submit" onClick={scrollLeft} >l</button>
        <div style={carouselStyle}>
          {bool ? (
            productsOnDisplay.map((element) => {
              counter++;
              return <RelatedItemCard key={counter} product={element} />
            })
          ) : (
            productsOnDisplay.map((element) => <OutfitCard product={element} />)
          )}
        </div>
        <button style={scrollButton} type="submit" onClick={scrollRight}>r</button>
      </div>
    </>

  )
}

export default Carousel;