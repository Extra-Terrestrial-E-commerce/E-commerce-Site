import React from "react";
import ReactDOM from "react-dom";
const { useState, useEffect } = React;

const ComparisonModal = ({ product, currentProduct }) => {
  var characteristics = {Category: [currentProduct.category, product.category], Price: [currentProduct.default_price, product.default_price] };
  for (let element of currentProduct.features) {
    characteristics[element.feature] = [element.value, null];
  }
  for (let element of product.features) {
    if (characteristics[element.feature]) {
      characteristics[element.feature][1] = element.value;
    } else {
      characteristics[element.feature] = [null, element.value]
    }
  }

  const popUpDiv = {
    position: 'absolute',
    left: -175,
    top: -200,
    width: '400px',
    height: '150px',
    backgroundColor: '#000066',
    color: 'white',
    borderRadius: '5px',
    overflow: 'scroll'
  }

  const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'gray'
  }

  useEffect(() => {
    const tableHeader = document.getElementById('header' + product.id);
    tableHeader.innerHTML = '';
    var headerRow = document.createElement('tr');
    var currentProductName = document.createElement('th');
    var blank = document.createElement('th');
    var compProductName = document.createElement('th');
    currentProductName.textContent = currentProduct.name;
    compProductName.textContent = product.name;
    headerRow.append(currentProductName);
    headerRow.append(blank)
    headerRow.append(compProductName)
    tableHeader.append(headerRow);

    const tableBody = document.getElementById(product.id);
    tableBody.innerHTML = '';
    for (let key in characteristics) {
      var newRow = document.createElement('tr');
      var currentProductCell = document.createElement('td');
      var catCell = document.createElement('td');
      var compProductCell = document.createElement('td');
      currentProductCell.textContent = characteristics[key][0]
      catCell.textContent = key;
      compProductCell.textContent = characteristics[key][1]
      newRow.append(currentProductCell)
      newRow.append(catCell);
      newRow.append(compProductCell);
      tableBody.append(newRow);
    }
  }, [product])

  return (
    <div style={popUpDiv}>
      <table >
        <thead style={headerStyle} id={'header' + product.id}>
        </thead>
        <tbody id={product.id}>
        </tbody>
    </table>
    </div>
  )
}


export default ComparisonModal;