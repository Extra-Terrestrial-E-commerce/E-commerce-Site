import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;
import OneStar from './OneStar.jsx'

const AllStars = ( {rating, size} ) => {

  var fills = [];
  var lowerBound = Math.floor(rating);
  for (var i = 0; i < lowerBound; i++) {
    fills.push(1);
  }
  fills.push(rating - lowerBound);
  while (fills.length < 6) {
    fills.push(0);
  }

  const handleHover = () => {
    console.log('hovering');
  }

  const starStyle = {
    display: 'flex',
    flexDirection: 'row'
  }

  var counter = 0;
  return (
    <div syle={starStyle} onMouseOver={handleHover}>
      {fills.map((percentFill) => {
        counter++;
        return <OneStar key={counter} size={size} percentFill={percentFill} />
        }
      )}
    </div>
  )
}

export default AllStars;