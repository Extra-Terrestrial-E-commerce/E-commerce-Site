import React from "react";
import ReactDOM from "react-dom";
const { useRef, useEffect } = React;

const NewOutfitCard = ( {currentProduct, allOutfitItems, setAllOutfitItems} ) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    var canvas = canvasRef.current;
    var context = canvas.getContext('2d');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#000066';
    context.beginPath();
    context.moveTo(5, 90);
    context.lineTo(40, 90)
    context.lineTo(40, 55)
    context.lineTo(60, 55)
    context.lineTo(60, 90)
    context.lineTo(95, 90)
    context.lineTo(95, 110)
    context.lineTo(60, 110)
    context.lineTo(60, 145)
    context.lineTo(40, 145)
    context.lineTo(40, 110)
    context.lineTo(5, 110)
    context.lineTo(5, 90)
    context.closePath();
    context.fill();
    }, [])


  const handleAdd = () => {
    var currentItems = allOutfitItems;
    var tester = true;
    for (let item of currentItems) {
      if (item.id === currentProduct.id) {
        tester = false;
        break;
      }
    }
    if (tester) {
      currentItems = [currentProduct, ...currentItems];
      console.log('item pushed');
      setAllOutfitItems(currentItems);
    }
  }
  //we want a big plus don't we;
  return (
    <canvas ref={canvasRef} width={100} height={200} onClick={handleAdd}></canvas>
  )
}

export default NewOutfitCard;