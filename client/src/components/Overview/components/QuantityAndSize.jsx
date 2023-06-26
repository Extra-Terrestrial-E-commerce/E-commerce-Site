import React from 'react';
 const QuantityAndSize = ({skus}) => {
  const [skuList, setSkuList] = React.useState([]);
  React.useEffect(() => {
    if (skus) {
      setSkuList(Object.keys(skus));
    }
  }, [skus])

  console.log(skuList);
  return (
    <select>
      {skuList.map(key => <option key={key}>{skus[key].size}</option> )}
    </select>
  )
 }



export default QuantityAndSize;