'use strict';
// base imports

import React from 'react';
import ReactDOM from 'react-dom';

// component imports
import FileSelector from './FileSelector.js';

var container = React.createElement(
  'section',
  { className: 'article--narrow' },
  React.createElement(FileSelector, null)
);

var domContainer = document.querySelector('#react-root');
ReactDOM.render(container, domContainer);