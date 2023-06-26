import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect, useRef } = React;

const XButton = ( { size, toDoOnClick, buttonStyle, type } ) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;
    var context = canvas.getContext('2d');
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.fillStyle = 'red';
    context.beginPath();
    context.scale(size / 100, size / 100);
    context.moveTo(50, 40);
    context.lineTo(85, 5);
    context.lineTo(95, 15);
    context.lineTo(60, 50);
    context.lineTo(95, 85);
    context.lineTo(85, 95);
    context.lineTo(50, 60);
    context.lineTo(15, 95);
    context.lineTo(5, 85);
    context.lineTo(40, 50);
    context.lineTo(5, 15);
    context.lineTo(15, 5);
    context.lineTo(50, 40);
    context.closePath();
    context.stroke();
    context.fill();

  }, []);

  return (
    <canvas style={buttonStyle} ref={canvasRef} width={size} height={size} onClick={toDoOnClick} ></canvas>
  )
}

export default XButton;