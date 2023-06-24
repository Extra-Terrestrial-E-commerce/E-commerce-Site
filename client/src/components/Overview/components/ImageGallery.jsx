import React from 'react';

const ImageGallery = () => {
  const styles = {
    display:'flex',
    flexDirection:'column'
  }
  return (
    <>
      <div style = {styles}>
       <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/2048px-Grey_Square.svg.png' width='50' length='50' />
       <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/2048px-Grey_Square.svg.png' width='50' length='50'/>
       <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/2048px-Grey_Square.svg.png' width='50' length='50'/>
       <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/2048px-Grey_Square.svg.png' width='50' length='50'/>
       <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/2048px-Grey_Square.svg.png' width='50' length='50'/>
       <button>down</button>
      </div>
      <div>
        <button>left </button>
        <img />
        <button> right </button>
      </div>
    </>
  )
}


export default ImageGallery;
