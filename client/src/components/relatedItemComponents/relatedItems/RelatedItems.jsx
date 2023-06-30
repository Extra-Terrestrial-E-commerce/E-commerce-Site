import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import apiClient from '../../config/config.js';
import RelatedCard from './RelatedCard.jsx';

const RelatedItems = ( {currentProduct, setCurrentProduct} ) => {
  const [relatedItemsOnDisplay, setRelatedItemsOnDisplay] = useState([]);
  const [allRelatedItems, setAllRelatedItems] = useState([]);
  const [leftmostItem, setLeftmostItem] = useState(0);
  const [isAnyComparing, setIsAnyComparing] = useState(false);

  useEffect(() => {
    if (currentProduct.id) {
      const url = '/products/' + currentProduct.id + '/related'
      apiClient.get(url)
        .then((data) => {
          var relatedIds = data.data;
          var queries = [];
          relatedIds.forEach((id) => {
            queries.push(apiClient.get('/products/' + id))
          })
          var finalData = [];
          Promise.all(queries)
            .then((values) => {
              for (var i = 0; i < values.length; i++) {
                finalData.push(values[i].data);
              }
              setAllRelatedItems(finalData);
              setRelatedItemsOnDisplay(finalData.slice(0, 3))
            })
            .catch((error) => {
              console.error(error);
            })
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }, [currentProduct])

  const carouselStyle = {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'row'
  }
  const scrollButton = {
    display: leftmostItem >= allRelatedItems.length - 3 ? 'none' : 'flex',
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
    var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 3);
    setLeftmostItem(nextLeft);
    setRelatedItemsOnDisplay(nextDisplay);
  }

  const scrollRight = () => {
    console.log('scrolling right');
    var nextLeft = leftmostItem + 1;
    var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 3);
    setLeftmostItem(nextLeft);
    setRelatedItemsOnDisplay(nextDisplay);
  }

  var counter = 0;
  return (
    <>
      <div role="relatedItemsCarousel" style={carouselStyle}>
        <button style={scrollLeftButton} type="submit" onClick={scrollLeft} >l</button>
        {relatedItemsOnDisplay.map((element) => {
            counter++;
            return <RelatedCard key={counter} product={element} currentProduct={currentProduct} isAnyComparing={isAnyComparing} setIsAnyComparing={setIsAnyComparing} setCurrentProduct={setCurrentProduct}/>
          })}
        <button style={scrollButton} type="submit" onClick={scrollRight}>r</button>
      </div>
    </>
  )
}

export default RelatedItems;
