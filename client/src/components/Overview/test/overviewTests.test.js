import React from 'react';
const { useState } = React;
import { render, fireEvent, screen, act, waitFor, cleanup } from '@testing-library/react';
import App from '../../App.jsx';
import Overview from '../Overview.jsx';
import sampleData from '../../relatedItemComponents/tests/sampleData.js';
//test that overview renders an image gallery, product info, product overview and product style

//test that overview makes initial api call to get the current product

const currentProduct = sampleData.currentProduct;


describe('overview', () => {
  test('if main-overview div loads', () => {
    // const {container} = render(<Overview currentProduct ={currentProduct}/>)
    // const divElement = container.querySelector('div.main-overview');
    render (<Overview currentProduct ={currentProduct}/>);
    const input = screen.getByText('Morning Joggers');
    expect(input.innerHTML).toBe('Morning Joggers');
  });
})