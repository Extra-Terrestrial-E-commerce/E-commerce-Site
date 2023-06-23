import React from "react";
import ReactDOM from "react-dom";
import OutfitCard from "./OutfitCard.jsx";
import NewOutfitCard from "./NewOutfitCard.jsx";
const { useState, useEffect } = React;

const OutfitItems = ( {currentProduct} ) => {
  const [outfitItemsOnDisplay, setOutfitItemsOnDisplay] = useState([{}, {}, {}]);
  const [allOutfitItems, setAllOutfitItems] = useState([{}, {}, {}, {}, {}]);

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
          <NewOutfitCard />
          {outfitItemsOnDisplay.map((element) => {
              counter++;
              return <OutfitCard key={counter} product={element} />
            })}
        </div>
        <button style={scrollButton} type="submit" onClick={scrollRight}>r</button>
      </div>
    </>
  )
}

export default OutfitItems;