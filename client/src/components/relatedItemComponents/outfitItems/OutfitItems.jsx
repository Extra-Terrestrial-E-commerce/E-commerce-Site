import React from "react";
import ReactDOM from "react-dom";
import NewOutfitCard from "./NewOutfitCard.jsx";
import OutfitCard from './OutfitCard.jsx';
const { useState, useEffect } = React;

const OutfitItems = ( {currentProduct} ) => {
  const [outfitItemsOnDisplay, setOutfitItemsOnDisplay] = useState([]);
  const [allOutfitItems, setAllOutfitItems] = useState([]);
  const [leftmostItem, setLeftmostItem] = useState(0);
  const [leftDisplay, setLeftDisplay] = useState(false);
  const [rightDisplay, setRightDisplay] = useState(false);

  useEffect(() => {
    var newDisplayItems = allOutfitItems.slice(0, 2);
    if (allOutfitItems.length > 2) {
      var rightButton = document.getElementById('rightOutfitButton');
      rightButton.innerHTML = '&#8618;';
      setRightDisplay(true);
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

  const carouselStyle = {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'row'
  }

  const scrollOutfitButton = {
    display: 'flex',
    backgroundColor: !rightDisplay ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '20px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const scrollLeftOutfitButton = {
    display: 'flex',
    backgroundColor: !leftDisplay ? '#e9ecef' : 'white',
    borderRadius: '5px',
    height: '100%',
    width: '20px',
    margin: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  var counter = 0;
  return (
    <>
      <div style={carouselStyle}>
        <div style={carouselStyle}>
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