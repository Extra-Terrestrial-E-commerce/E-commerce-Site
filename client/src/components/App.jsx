import React from "react";
import ReactDOM from "react-dom";
const { useState } = React;
import OutfitsAndRelatedItems from "./relatedItemComponents/OutfitsAndRelatedItems.jsx";

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <>
      <div>hello world, mars</div>
      <div>
        <OutfitsAndRelatedItems currentProduct={currentProduct} />
      </div>
    </>


  )
}

export default App;