'use strict'
// base imports
import React from 'react'
import ReactDOM from 'react-dom'

// component imports
import CreateProjectForm from './createProjectMock.jsx'

const container = (
  <section className='article--narrow'>
    <h1>React Container</h1>
    <CreateProjectForm userName='Joe Smithsky' />
  </section>
)

const domContainer = document.querySelector('#react-root')
ReactDOM.render(container, domContainer)
