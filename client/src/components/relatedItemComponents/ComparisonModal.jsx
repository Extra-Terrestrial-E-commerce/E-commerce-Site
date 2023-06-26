import React from "react";
import ReactDOM from "react-dom";

const ComparisonModal = () => {
  // how do we want this to work? we take in a couple of ids, get their data, then do our comparison/
  // we can't really put it in the div tho can we, so maybe we do need a popup component that renders wherever on the page that we want it to regardless of what div we're in.
  const popUpDiv = {
    position: 'absolute',
    left: 5,
    top: -160,
    width: '300px',
    height: '150px',
    backgroundColor: '#000066',
    color: 'white',
    borderRadius: '5px'
  }

  return (
    <div style={popUpDiv} >hello world, mars</div>
  )
}

export default ComparisonModal;


//// current product name ||||| ____________ |||||| product being compared name
////     __value__    ||||| characteristic name ||||| ___compared value___
//// ...

/// to do: make it a table, make it scrollable, fix names on top of list;

