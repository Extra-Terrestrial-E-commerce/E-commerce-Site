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
    flexDirection: 'row',
    margin: '5px'
  }
  const scrollButton = {
    display: 'flex',
    backgroundColor: leftmostItem >= allRelatedItems.length - 3 ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '20px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const scrollLeftButton = {
    display: 'flex',
    backgroundColor: leftmostItem === 0 ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '20px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const scrollLeft = () => {
    var nextLeft = leftmostItem - 1;
    if (nextLeft < allRelatedItems.length - 3) {
      var rightButton = document.getElementById('rightButton');
      rightButton.innerHTML = '&#8618;';
    }

    if (nextLeft === 0) {
      var leftButton = document.getElementById('leftButton');
      leftButton.innerHTML = '';
      setLeftmostItem(nextLeft);
    } else {
      var leftButton = document.getElementById('leftButton');
      leftButton.innerHTML = '&#8617;'
      var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 3);
      setLeftmostItem(nextLeft);
      setRelatedItemsOnDisplay(nextDisplay);
    }
  }

  const scrollRight = () => {
    var nextLeft = leftmostItem + 1;
    if (nextLeft !== 0) {
      var leftButton = document.getElementById('leftButton');
      leftButton.innerHTML = '&#8617;'
    }

    if (nextLeft > allRelatedItems.length - 3) {
      //do nothing
    } else if (nextLeft === allRelatedItems.length - 3) {
      var rightButton = document.getElementById('rightButton');
      rightButton.innerHTML = ''
      var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 3);
      setLeftmostItem(nextLeft);
      setRelatedItemsOnDisplay(nextDisplay);
    } else {
      var nextDisplay = allRelatedItems.slice(nextLeft, nextLeft + 3);
      setLeftmostItem(nextLeft);
      setRelatedItemsOnDisplay(nextDisplay);
    }
  }

  var counter = 0;
  return (
    <>
      <div role="relatedItemsCarousel" style={carouselStyle}>
        <div id='leftButton' style={scrollLeftButton} onClick={scrollLeft} > </div>
        <div style={carouselStyle} >
            {relatedItemsOnDisplay.map((element) => {
              counter++;
              return <RelatedCard key={counter} product={element} currentProduct={currentProduct} isAnyComparing={isAnyComparing} setIsAnyComparing={setIsAnyComparing} setCurrentProduct={setCurrentProduct}/>
            })}
        </div>
        <div id='rightButton' style={scrollButton} onClick={scrollRight}>&#8618;</div>
      </div>
    </>
  )
}

export default RelatedItems;
