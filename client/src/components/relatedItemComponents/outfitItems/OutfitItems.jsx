import React from "react";
import ReactDOM from "react-dom";
import NewOutfitCard from "./NewOutfitCard.jsx";
import OutfitCard from './OutfitCard.jsx';
import apiClient from '../../config/config.js';
const { useState, useEffect } = React;

const OutfitItems = ( {currentProduct} ) => {
  const [outfitItemsOnDisplay, setOutfitItemsOnDisplay] = useState([]);
  const [allOutfitItems, setAllOutfitItems] = useState([]);
  const [leftmostItem, setLeftmostItem] = useState(0);
  const [leftDisplay, setLeftDisplay] = useState(false);
  const [rightDisplay, setRightDisplay] = useState(false);

  useEffect(() => {
    var itemsOnLoad = localStorage.getItem('outfitItems');
    var idsOnLoad = itemsOnLoad.split('_');
    var queries = [];
    idsOnLoad.forEach((id) => {
      if (id !== '') {
        queries.push(apiClient.get('/products/' + id));
      }
    })
    Promise.all(queries)
      .then((values) => {
        var finalData = [];
        for (var i = 0; i < values.length; i++) {
          finalData.push(values[i].data)
        }
        setAllOutfitItems(finalData);
      })
  }, [])

  useEffect(() => {
    console.log(localStorage.getItem('outfitItems'));
    var newDisplayItems = allOutfitItems.slice(0, 2);
    if (allOutfitItems.length > 2) {
      var rightButton = document.getElementById('rightOutfitButton');
      rightButton.innerHTML = '&#8618;';
      setRightDisplay(true);
    } else {
      setRightDisplay(false);
      setLeftDisplay(false);
      var left = document.getElementById('leftOutfitButton');
      left.innerHTML = '';
      var right = document.getElementById('rightOutfitButton');
      right.innerHTML = '';
    }
    setOutfitItemsOnDisplay(newDisplayItems)
  }, [allOutfitItems])


  useEffect(() => {

    if (leftmostItem === 0) {
      var leftButton = document.getElementById('leftOutfitButton');
      leftButton.innerHTML = ''
      setLeftDisplay(false);
    } else if (!leftDisplay) {
      var leftButton = document.getElementById('leftOutfitButton');
      leftButton.innerHTML = '&#8617;'
      setLeftDisplay(true);
    }

    if (leftmostItem >= allOutfitItems.length - 2 && rightDisplay) {
      var rightButton = document.getElementById('rightOutfitButton');
      rightButton.innerHTML = ''
      setRightDisplay(false);
    } else if (!rightDisplay && allOutfitItems.length > 2) {
      var rightButton = document.getElementById('rightOutfitButton');
      rightButton.innerHTML = '&#8618;'
      setRightDisplay(true);
    }

    var newDisplayItems = allOutfitItems.slice(leftmostItem, leftmostItem + 2);
    setOutfitItemsOnDisplay(newDisplayItems);
  }, [leftmostItem])

  const scrollLeft = () => {
    if (leftDisplay) {
      var nextLeft = leftmostItem - 1;
      setLeftmostItem(nextLeft);
    }
  }

  const scrollRight = () => {
    if (rightDisplay) {
      var nextLeft = leftmostItem + 1;
      setLeftmostItem(nextLeft);
    }
  }

  var scrollOutfitButton = {
    display: 'flex',
    backgroundColor: !rightDisplay ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '75px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }
  var leftFade = {
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    transition: 'background-color 0.5s'
  }

  if (rightDisplay) {
    scrollOutfitButton = {
      ...scrollOutfitButton,
      ...leftFade
    }
  }

  var scrollLeftOutfitButton = {
    display: 'flex',
    backgroundColor: !leftDisplay ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '75px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  var rightFade = {
    background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    transition: 'background-color 0.5s'
  }

  if (leftDisplay) {
    scrollLeftOutfitButton = {
      ...scrollLeftOutfitButton,
      ...rightFade
    }
  }

  var counter = 0;
  return (
    <>
      <div id="carousel" >
        <div id="carousel" >

          <NewOutfitCard currentProduct={currentProduct} allOutfitItems={allOutfitItems} setAllOutfitItems={setAllOutfitItems}/>


          <div id='leftOutfitButton' style={scrollLeftOutfitButton} onClick={scrollLeft} > </div>

          {outfitItemsOnDisplay.map((element) => {
              counter++;
              return <OutfitCard key={counter} product={element} allOutfitItems={allOutfitItems} setAllOutfitItems={setAllOutfitItems}/>
            })}
        </div>
        <div id='rightOutfitButton' style={scrollOutfitButton} onClick={scrollRight}> </div>
      </div>
    </>
  )
}

export default OutfitItems;