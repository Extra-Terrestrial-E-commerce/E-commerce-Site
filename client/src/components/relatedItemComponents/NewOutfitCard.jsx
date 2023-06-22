import React from "react";
import ReactDOM from "react-dom";

const NewOutfitCard = () => {

  const handleAdd = () => {
    console.log('adding outfit item');
  }
  return (
    <div onClick={handleAdd}>add new outfit ya</div>
  )
}

export default NewOutfitCard;