'use strict'
// base imports
import React from 'react'
import ReactDOM from 'react-dom'

// component imports
import FileSelector from './FileSelector.js'

const container = (
  <section className='article--narrow'>
    <FileSelector />
  </section>
)

const domContainer = document.querySelector('#react-root')
ReactDOM.render(container, domContainer)
