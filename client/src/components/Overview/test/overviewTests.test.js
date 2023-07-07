import React from 'react';
const { useState } = React;
import { render, fireEvent, screen, act, waitFor, cleanup } from '@testing-library/react';
import App from '../../App.jsx';
import Overview from '../Overview.jsx';
import sampleData from './sampleData.js';
import ProductInfo from '../components/ProductInfo.jsx'
//test that overview renders an image gallery, product info, product overview and product style

//test that overview makes initial api call to get the current product

const currentProduct = sampleData.currentProduct;
const styles = sampleData.styles;
const selectedStyles = sampleData.styles[0];

describe('overview', () => {
  test('if main-overview div loads', () => {
    render (<Overview currentProduct ={currentProduct}/>);
    const input = screen.getByText('Morning Joggers');
    expect(input.innerHTML).toBe('Morning Joggers');
  });

  test('Category appears in product info', () => {
    render(<ProductInfo product={currentProduct} style ={selectedStyles}/>)
    const category = screen.getByText("Pants");
    expect(category).toBeTruthy();
  });

  test('Product name appears in product info', () => {
    render(<ProductInfo product={currentProduct} style ={selectedStyles}/>)
    const name = screen.getByText("Morning Joggers");
    expect(name).toBeTruthy();
  });

  test('Product default price appears in product info', () => {
    render(<ProductInfo product={currentProduct} style ={selectedStyles}/>)
    const default_price = screen.getByText("40.00");
    expect(default_price).toBeTruthy();
  })

  // test('Product should display the correct number of stars ', async () => {
  //   render(<ProductInfo product={currentProduct} style ={selectedStyles}/>)
  //   screen.debug();
  // })
})