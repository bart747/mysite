'use strict'
// base imports
import React from 'react'
import ReactDOM from 'react-dom'

// component imports
import FileSelector from './FileSelector.js'

const containero = (
  <section className='article--narrow'>
    <FileSelector />
  </section>
)

const domContainer = document.querySelector('#react-root')
if (domContainer) {
  ReactDOM.render(containero, domContainer)
}
