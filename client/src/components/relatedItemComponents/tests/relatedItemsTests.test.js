import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../App.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';

describe('should run tests on npm script', () => {
  it('should render the app element', () => {
    render(<App />)
    expect(screen.getByText('hello world, mars')).toBeTruthy();
  })
})

describe('should display related items', () => {
  it('should render a list of related items consisting of item cards', () => {
    render(<App />)
    expect(true).toBeTruthy();
  })
})

//// tests to write:
// related items:
// 1) test if the list comes up, if it consists of cards;
// 2) test if on click it changes the current product;
// 3) read only info on card: product name, category, price, stars
// 4) test stars, should fill appropriately;
// 5) should display a preview image //// NOT IMPLEMENTED
// action button:
// 6) related items action button should be a star and should open up the comparison modal

// carousel functionality:
// 1) arrows should appear on the right and left hand side for navigation
// 2) if list is all the way to the left or right, appropriate arrows should disappear
// 3) clicking through the list should scroll one product at a time
// extra tests:
// 4) list should automatically determine how many cards to display depending on screen width;
// 5) list should automatically add or take away cards if the screen gets bigger or smaller

// comparison modal:
// 1) characteristics should appear in a table format, a row for every characteristic
// 2) if value is a boolean, should display a checkmark //// NOT IMPLEMENTED
// 3) table should be scrollable
// 4) if long enough to be scrollable the header should stick to the top and have the names of the two products

// outfits:
// 1) leftmost card should be an add new item button.
// 2) should stay on the left, on click it should add the current product to the outfit list
// 3) a user should only be able to add an outfit once
// 4) the list should persist across page navigation
// 5) the list should persist for a customer even if they exit the website and return //// NOT IMPLEMENTED
// 6) action button should display as a red X icon.
// 7) on click it should remove the item from the outfit list;

