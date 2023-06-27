import React from 'react';
import apiClient from '../../config/config.js';


const ProductCheckout = ({skus, id}) => {

  const [selectedSkuId, setSelectedSkuId] = React.useState(null);
  const [quantitySelected, setQuantitySelected] = React.useState(0);
  const [stockAvailable, setStockAvailable] = React.useState(true);
  const [missingSize, setMissingSize] = React.useState(false);


  const selectRef = React.useRef();
  React.useEffect(() => {
    if (skus) {
      var sum = Object.keys(skus)
        .reduce((accum, currentvalue) => accum + skus[currentvalue].quantity, 0);
      if (sum === 0) {
        setStockAvailable(false);
      }
    }
  }, [skus])
  const handleSelect = (e) => {
    const key = e.target.value;
    setSelectedSkuId(key);
    setMissingSize(false);


  }
  const handleSubmit = () => {
    if(selectedSkuId && quantitySelected) {

      apiClient.post('/cart',  {sku_id: selectedSkuId})
      .then(data => console.log('data posted ', data))
      .catch(err => console.log('post or fetch to cart fail, ', err));
    }
    if(selectedSkuId === 'Select Size' || selectedSkuId === null) {
      //open size drop down
      selectRef.current.focus();
      //message above dropdown 'Please select size'
      setMissingSize(true);
    }
  }

  const adjustedQuantity = () => {
    if (skus[selectedSkuId] === undefined) {
      return 0;
    }
    const quantity = skus[selectedSkuId].quantity;
    if (quantity <= 15) {
      return quantity
    } else {
      return 15;
    }
  }

  return (
    <div>
      {missingSize && <p>Please select size</p>}
      <select
        ref={selectRef}
        onChange = {(e) => handleSelect(e)}
        // onFocus ={(e) => e.target.size = '6'}
        // onBlur={(e)=>{e.target.size='0'}}
      >
        {stockAvailable ?
          <option value='Select Size'>--Select Size--</option> : <option disabled>Out of Stock</option>
        }
        {(skus && stockAvailable) &&
          Object.keys(skus)
            .map(sku_id => <option key = {sku_id} value ={sku_id} >{skus[sku_id].size}</option> )}
      </select>
      {stockAvailable &&
      <select onChange ={(e) => setQuantitySelected(e.target.value)}>
       {(!selectedSkuId || selectedSkuId === 'Select Size') &&
        <option value='Select Size' disabled ={true}>--</option> }
        { selectedSkuId &&
          Array
            .from ({length: adjustedQuantity() }, (_, i) => i + 1)
            .map( size => <option key ={size} value={size}>{size}</option>)}
      </select>}
      {stockAvailable &&
       <button onClick ={handleSubmit} >
        Add to Cart
      </button>}

    </div>
  )
}


export default ProductCheckout;