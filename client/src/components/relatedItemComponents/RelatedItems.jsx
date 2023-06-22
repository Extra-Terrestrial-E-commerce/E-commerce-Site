import React from "react";
import ReactDOM from "react-dom";
import RelatedItemCard from "./RelatedItemCard.jsx";
const { useState, useEffect } = React;

const RelatedItems = ( {currentProduct} ) => {
  const [relatedItemsOnDisplay, setRelatedItemsOnDisplay] = useState([{}, {}, {}, {}]);
  const [allRelatedItems, setAllRelatedItems] = useState([{}, {}, {}, {}, {}]);
  const [leftmostItem, setLeftmostItem] = useState(0);

  // now how do we get the scroll functionality, ignoring how many we want displayed

  const carouselStyle = {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'row'
  }
  const scrollButton = {
    display: leftmostItem >= allRelatedItems.length - 4 ? 'none' : 'flex',
    height: '100%',
    width: '5px'
  }

  const scrollLeftButton = {
    display: leftmostItem === 0 ? 'none' : 'flex',
    height: '100%',
    width: '5px'
  }

  const scrollLeft = () => {
    console.log('scrolling left');
    var nextLeft = leftmostItem - 1;
    var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 4);
    setLeftmostItem(nextLeft);
    setRelatedItemsOnDisplay(nextDisplay);
  }

  const scrollRight = () => {
    console.log('scrolling right');
    var nextLeft = leftmostItem + 1;
    var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 4);
    setLeftmostItem(nextLeft);
    setRelatedItemsOnDisplay(nextDisplay);
  }

  var counter = 0;
  return (
    <>
      <div style={carouselStyle}>
        <button style={scrollLeftButton} type="submit" onClick={scrollLeft} >l</button>
        <div style={carouselStyle}>
          {relatedItemsOnDisplay.map((element) => {
              counter++;
              return <RelatedItemCard key={counter} product={element} />
            })}
        </div>
        <button style={scrollButton} type="submit" onClick={scrollRight}>r</button>
      </div>
    </>
  )
}

export default RelatedItems;