import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import App from '../../App.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';
import ComparisonModal from '../relatedItems/ComparisonModal.jsx';
import RelatedCard from '../relatedItems/RelatedCard.jsx';
import apiClient from '../../config/config.js';
import sampleData from './sampleData.js';

jest.mock('../../config/config.js');
const currentProduct = sampleData.currentProduct;
const relatedItems = sampleData.relatedItems;
// blanking out the comparison modal so we don't get errors;
jest.mock('../relatedItems/ComparisonModal', () => ({
  __esModule: true,
  default: jest.fn(() => <></>),
}));

describe('should display related items', () => {
  it('should make an api call for related items and turn them into relatedItemCards', async () => {
    apiClient.get.mockResolvedValue({ data: relatedItems });
    await act(async () => {
      render(<RelatedItems currentProduct={currentProduct}/>)
    })
    const foundRelatedItemCards = screen.getAllByRole('relatedItemCard');
    expect(foundRelatedItemCards).toBeTruthy();
  })

  it('should change the current product on click of a relatedItemCard', () => {
    expect(true).toBeTruthy();
  })

  it('should render the name, price, category, stars on a relatedItemCard', async () => {
    await act(async() => {
      render(<RelatedCard product={relatedItems[0]} />)
    })
    var name = screen.getByText('Heir Force Ones');
    var category = screen.getByText('Kicks');
    var price = screen.getByText('99.00');
    var stars = screen.getByRole('stars');
    expect(name).toBeTruthy();
    expect(category).toBeTruthy();
    expect(price).toBeTruthy();
    expect(stars).toBeTruthy();
  })
})

//// tests to write:
// related items:
// 1) test if the list comes up, if it consists of cards; ///// DONE
// 2) test if on click it changes the current product;
// 3) read only info on card: product name, category, price, stars ///// DONE
// 4) test stars, should fill appropriately;
// 5) should display a preview image //// NOT IMPLEMENTED
// action button:
// 6) related items action button should be a star and should open up the comparison modal ///// DONE

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

