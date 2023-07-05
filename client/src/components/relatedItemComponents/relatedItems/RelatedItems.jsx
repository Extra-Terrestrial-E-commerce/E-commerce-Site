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
  const [leftDisplay, setLeftDisplay] = useState(false);
  const [rightDisplay, setRightDisplay] = useState(false);

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

  useEffect(() => {
    if (allRelatedItems.length > 3) {
      var rightButton = document.getElementById('rightButton');
      rightButton.innerHTML = '&#8618;'
      setRightDisplay(true);
    } else {
      var rightButton = document.getElementById('rightButton');
      rightButton.innerHTML = '';
      setRightDisplay(false);
    }
  }, [allRelatedItems])

  useEffect(() => {
    if (leftmostItem === 0) {
      var leftButton = document.getElementById('leftButton');
      leftButton.innerHTML = ''
      setLeftDisplay(false);
    } else if (!leftDisplay) {
      var leftButton = document.getElementById('leftButton');
      leftButton.innerHTML = '&#8617;'
      setLeftDisplay(true);
    }

    if (leftmostItem >= allRelatedItems.length - 3 && rightDisplay) {
      var rightButton = document.getElementById('rightButton');
      rightButton.innerHTML = '';
      setRightDisplay(false);
    } else if (!rightDisplay) {
      var rightButton = document.getElementById('rightButton');
      rightButton.innerHTML = '&#8618;'
      setRightDisplay(true)
    }
  }, [leftmostItem])


  const scrollLeft = () => {
    if (leftDisplay) {
      var nextLeft = leftmostItem - 1;
      setLeftmostItem(nextLeft);
      setRelatedItemsOnDisplay(allRelatedItems.slice(nextLeft, nextLeft + 3))
    }
  }

  const scrollRight = () => {
    if (rightDisplay) {
      var nextLeft = leftmostItem + 1;
      setLeftmostItem(nextLeft);
      setRelatedItemsOnDisplay(allRelatedItems.slice(nextLeft, nextLeft + 3))
    }
  }

  var scrollButton = {
    display: 'flex',
    backgroundColor: !rightDisplay ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '75px',
    margin: '5px',
    padding: '5px',
    alignItems: 'center',
    justifyContent: 'right'
  }

  var leftFade = {
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    transition: 'background-color 0.5s'
  }

  if (rightDisplay) {
    scrollButton = {
      ...scrollButton,
      ...leftFade
    }
  }

  var scrollLeftButton = {
    display: 'flex',
    backgroundColor: !leftDisplay ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '75px',
    margin: '5px',
    padding: '5px',
    alignItems: 'center',
    justifyContent: 'left'
  }

  var rightFade = {
    background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    transition: 'background-color 0.5s'
  }

  if (leftDisplay) {
    scrollLeftButton = {
      ...scrollLeftButton,
      ...rightFade
    }
  }

  var counter = 0;
  return (
    <>
      <div role="relatedItemsCarousel" id="carousel">
        <div id='leftButton' style={scrollLeftButton} onClick={scrollLeft} > </div>
        <div id="carousel">
            {relatedItemsOnDisplay.map((element) => {
              counter++;
              return <RelatedCard key={counter} product={element} currentProduct={currentProduct} isAnyComparing={isAnyComparing} setIsAnyComparing={setIsAnyComparing} setCurrentProduct={setCurrentProduct}/>
            })}
        </div>
        <div id='rightButton' style={scrollButton} onClick={scrollRight}> </div>
      </div>
    </>
  )
}

export default RelatedItems;
