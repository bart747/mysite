// Link.react.test.js
import React from 'react';
import FileSelector from '../src/FileSelector.jsx'

import renderer from 'react-test-renderer';

test('Uppload files form ', () => {
  const tree = renderer
    .create(<FileSelector />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
