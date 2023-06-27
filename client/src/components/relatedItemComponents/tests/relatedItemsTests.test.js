// prereqs:
// jest
// babel-jest
// @babel/preset-env  (installed)
// @babel/preset-react (installed)
// @testing-library/react
// jest-environment-jsdom

// npm i --save-dev jest babel-jest @testing-library/react jest-environment-jsdom

// in babel.config.js (.babelrc)
// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env', {targets: { node : 'current'}}
//     ]
//   ]
// }

// in package.json:
// "scripts" : { "test": "jest --env=jsdom" }

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../App.jsx';

// modal somethine

describe('should run tests on npm script', () => {

  it('should not throw any errors', () => {
    expect(true).toBeTruthy();
  })

})