import React from "react";

const RatingsBar = ({completed, actualNumber}) => {
  const containerStyles = {
    height: 10,
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    margin: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'grey',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <>
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
    <p>{actualNumber}</p>
    </>
  )

}

export default RatingsBar;