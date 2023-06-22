import React from "react";
import ReactDOM from "react-dom";
import OutfitsAndRelatedItems from "./relatedItemComponents/OutfitsAndRelatedItems.jsx";
import Overview from "./Overview/Overview.jsx";
const App = () => {
  return (
    <>
      <div>hello world, mars</div>
      <div>
        <Overview />
        <OutfitsAndRelatedItems />
      </div>
    </>


  )
}

export default App;