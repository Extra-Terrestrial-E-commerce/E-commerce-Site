import React from 'react';
const { useState } = React;
import { render, fireEvent, screen, act, waitFor, cleanup } from '@testing-library/react';


import App from '../../App.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';
import ComparisonModal from '../relatedItems/ComparisonModal.jsx';
import RelatedCard from '../relatedItems/RelatedCard.jsx';
import apiClient from '../../config/config.js';
import sampleData from './sampleData.js';

import AllStars from '../../Stars/AllStars.jsx';
import OneStar from '../../Stars/OneStar.jsx';

jest.mock('../../config/config.js');
const currentProduct = sampleData.currentProduct;
const relatedItems = sampleData.relatedItems;

const review = sampleData.review;

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


  it('should toggle visibility of comparison modal', async () => {
    function TestWrapper({ initialIsAnyComparing }) {
      const [isAnyComparing, setIsAnyComparing] = useState(initialIsAnyComparing);
      return (
        <RelatedCard
          product={relatedItems[0]}
          isAnyComparing={isAnyComparing}
          setIsAnyComparing={setIsAnyComparing}
        >
          <ComparisonModal product={relatedItems[0]} currentProduct={currentProduct} />
        </RelatedCard>
      );
    }

    await act(async () => {
      render(
        <TestWrapper initialIsAnyComparing={false} />
      );
    });

    var modalContainer = screen.getByTestId("comparisonModalContainer");
    var currentStyle = window.getComputedStyle(modalContainer);
    expect(currentStyle._values.display).toBe('none');

    const starButton = screen.getByRole('openCompare');
    fireEvent.click(starButton);
    var currentStyle = window.getComputedStyle(modalContainer);
    expect(currentStyle._values.display).toBe('flex');

    fireEvent.click(starButton);
    var currentStyle = window.getComputedStyle(modalContainer);
    expect(currentStyle._values.display).toBe('none');
  })

  it('should make an api call in relatedCard to get the review data, set the starRating w/ averaged rating', async () => {

    const setState = jest.fn();
    jest.spyOn(React, 'useState')
      .mockImplementation(initState => [initState, setState]);

    apiClient.get.mockResolvedValue({data: review})
    await act(async () => {
      render(
         <RelatedCard product={relatedItems[3]} />
      );
    });

    const aggregate = (objectOfReviews) => {
      var count = 0;
      var total = 0;
      for (let key in objectOfReviews) {
        count = count +  parseInt(objectOfReviews[key]);
        total = total + (key * objectOfReviews[key]);
      }
      return [count, total];
    }
    var aggregatedData = aggregate(review.ratings);
    var stars = aggregatedData[1]/aggregatedData[0];
    var stars = stars.toFixed(2);
    expect(setState).toHaveBeenCalledWith(stars);

  })

  it('should change the current product on click of a relatedItemCard', () => {
    expect(true).toBeTruthy();
  })


})

describe('should display a rating as an image of filled stars', () => {
  it('should always consist of five stars', () => {
    render(<AllStars rating={3.6} size={10} />)
    var stars = screen.getAllByRole('oneStar')
    expect(stars.length).toBe(5);
  })

  it('should fill a star appropriately', () => {
    const findVertical = (pointSequence) => {
      var vertical;
      for (var i = 0; i < pointSequence.length - 1; i++) {
        if (pointSequence[i].props.x === pointSequence[i + 1].props.x) {
          vertical = pointSequence[i].props.x
          break
        }
      }
      return vertical;
    }

    render(<OneStar percentFill={1} size={10}/>)
    var canvas = screen.getByRole('oneStar');
    var ctx = canvas.getContext('2d');
    var events = ctx.__getEvents();
    var lastEvent = events[events.length - 1]
    expect(lastEvent.type).toEqual('fill');
    var path = lastEvent.props.path;
    path = path.slice(1, path.length - 1);
    var fullStarVertical = findVertical(path);
    expect(fullStarVertical).toBe(undefined);
    cleanup();

    render(<OneStar percentFill={0} size={10}/>)
    var canvas = screen.getByRole('oneStar');
    var ctx = canvas.getContext('2d');
    var events = ctx.__getEvents();
    var lastEvent = events[events.length - 1]
    expect(lastEvent.type).toEqual('stroke');
    var path = lastEvent.props.path;
    path = path.slice(1, path.length - 1);
    var fullStarVertical = findVertical(path);
    expect(fullStarVertical).toBe(undefined);
    cleanup();

    render(<OneStar percentFill={.25} size={10}/>)
    var canvas = screen.getByRole('oneStar');
    var ctx = canvas.getContext('2d');
    var events = ctx.__getEvents();
    var lastEvent = events[events.length - 1]
    expect(lastEvent.type).toEqual('fill');
    var path = lastEvent.props.path;
    path = path.slice(1, path.length - 1);
    var fullStarVertical = findVertical(path);
    expect(fullStarVertical).toBe(42);
    cleanup();

    render(<OneStar percentFill={.5} size={10}/>)
    var canvas = screen.getByRole('oneStar');
    var ctx = canvas.getContext('2d');
    var events = ctx.__getEvents();
    var lastEvent = events[events.length - 1]
    expect(lastEvent.type).toEqual('fill');
    var path = lastEvent.props.path;
    path = path.slice(1, path.length - 1);
    var fullStarVertical = findVertical(path);
    expect(fullStarVertical).toBe(50);
    cleanup();

    render(<OneStar percentFill={.75} size={10}/>)
    var canvas = screen.getByRole('oneStar');
    var ctx = canvas.getContext('2d');
    var events = ctx.__getEvents();
    var lastEvent = events[events.length - 1]
    expect(lastEvent.type).toEqual('fill');
    var path = lastEvent.props.path;
    path = path.slice(1, path.length - 1);
    var fullStarVertical = findVertical(path);
    expect(fullStarVertical).toBe(58);
    cleanup();
  })

})

describe('should display related items and outfit items on a carousel', () => {

  it('should scroll on button click, scroll back', async () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState')
      .mockImplementation(initState => [initState, setState]);
    apiClient.get.mockResolvedValueOnce({ data: relatedItems });
    await act(async () => {
      render(<RelatedItems currentProduct={currentProduct}/>)
    })

    const stateCalls = setState.mock.calls;
    const states = stateCalls.map((call) => call[0]);
    console.log(states[3][0].length);
    console.log(states[4][0].length);

    expect(states.includes([relatedItems.slice(0,3)])).toBeTruthy()
    var left = document.getElementById('leftButton');
    var right = document.getElementById('rightButton');


    fireEvent.click(rightButton);
    // var currentStyle = window.getComputedStyle(modalContainer);
    // expect(currentStyle._values.display).toBe('none');


  })

  it('should display the buttons and their arrows correctly', () => {
    expect(true).toBeTruthy();
  })

})

describe('should have a comparison modal', () => {
  it('should appear in a table format, with a row for every characteristic', () => {

  })

  it('should display booleans as a checkmark', () => {

  })

  it('should be scrollable, and the header should stick to the top displaying with the product names', () => {

  })
})

describe('should have a space for outfit items', () => {
  it('should have as the leftmost item an add outfit button', () => {

  })

  it('should add an item on button click', () => {

  })

  it('should have its outfit list persist even if the customer exits and returns', () => {

  })

  it('should have an x button on each card that deletes an item from the list', () => {

  })

})
