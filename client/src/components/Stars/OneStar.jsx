import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect, useRef } = React;

const OneStar = ( {percentFill, size} ) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;
    var context = canvas.getContext('2d');
    context.strokeStyle = '#000066';
    context.lineWidth = 5;
    context.fillStyle = '#000066';
    context.beginPath();
    context.scale(size / 100, size / 100);
    context.moveTo(50, 5);
    context.lineTo(62, 40)
    context.lineTo(95, 40)
    context.lineTo(66, 60)
    context.lineTo(75, 95);
    context.lineTo(50, 70)
    context.lineTo(25, 95)
    context.lineTo(33, 60)
    context.lineTo(5, 40)
    context.lineTo(38, 40)
    context.lineTo(50, 5);
    context.closePath();
    context.stroke()

    if (percentFill > 0 && percentFill < .33) {
      context.beginPath()
      context.moveTo(5, 40)
      context.lineTo(38, 40);
      context.lineTo(42, 28);
      context.lineTo(42, 77);
      context.lineTo(25, 95);
      context.lineTo(33, 60);
      context.lineTo(5,40)
      context.closePath();
      context.fill()
    } else if (percentFill >= .33 && percentFill < .66) {
      context.beginPath();
      context.moveTo(50, 5);
      context.lineTo(50, 70);
      context.lineTo(25, 95);
      context.lineTo(33, 60);
      context.lineTo(5, 40);
      context.lineTo(38, 40);
      context.lineTo(50, 5);
      context.closePath();
      context.fill();
    } else if (percentFill >= .66 && percentFill < 1) {
      context.beginPath();
      context.moveTo(50, 5);
      context.lineTo(58, 28);
      context.lineTo(58, 78);
      context.lineTo(50, 70);
      context.lineTo(25, 95);
      context.lineTo(33, 60);
      context.lineTo(5, 40);
      context.lineTo(38, 40);
      context.lineTo(50, 5);
      context.closePath();
      context.fill();
    } else if (percentFill !== 0) {
      context.fill();
    }
  }, [percentFill, size]);
  return (
    <canvas role="oneStar" ref={canvasRef} width={size} height={size}></canvas>
  )
}

export default OneStar;