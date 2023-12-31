import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import OneStar from './OneStar.jsx'

const AllStars = ( {rating, size} ) => {

  var fills = [];
  if (rating === 5) {
    fills = [1, 1, 1, 1, 1]
  } else {
    var lowerBound = Math.floor(rating);
    for (var i = 0; i < lowerBound; i++) {
      fills.push(1);
    }
    fills.push(rating - lowerBound);
    while (fills.length < 5) {
      fills.push(0);
    }
  }


  const handleHover = () => {
    console.log('hovering');
  }

  const starStyle = {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 9999
  }

  var counter = 0;
  return (
    <div role="stars" syle={starStyle} onMouseOver={handleHover}>
      {fills.map((percentFill) => {
        counter++;
        return <OneStar key={counter} size={size} percentFill={percentFill} />
        }
      )}
    </div>
  )
}

export default AllStars;