import React, { useState } from 'react'
import './componentStyles/createProjectMock.css'

function CreateProjectForm (props) {
  const [fileList, updateFileList] = useState(['empty'])

  function logFiles () {
    const getFiles = document.getElementById('file-upload').files
    const newFiles = []
    const len = getFiles.length
    for (let i = 0; i < len; i += 1) {
      newFiles.push(getFiles[i].name)
    }
    updateFileList(newFiles)
    console.log(getFiles)
  }

  const listFiles = fileList.map((file, index) =>
    <li key={index}>{file}</li>
  )

  return (
    <section>
      <h2>Create new project:</h2>

      <form
        className='cpm--form'
        action='/my-unexisting-form-handling-page'
        method='post'
      >

        <label className='cpm--label' htmlFor='project-name'>
          Project Name:
        </label>
        <input
          className='cpm--input'
          type='text'
          id='project-name'
          name='project-name'
        />

        <br />

        <label className='cpm--label' htmlFor='project-description'>
          Brief description:
        </label>
        <textarea
          className='cpm-textarea'
          type='text'
          id='project-description'
          name='project-description'
        />

        <br />

        <label className='cpm--label' htmlFor='project-privacy'>
          Private?
        </label>
        <input
          type='checkbox'
          id='project-privacy'
          name='project-privacy'
        />

        <h3> Selected Files </h3>
        <ul>
          {listFiles}
        </ul>

        <br />

        <label className='cpm--label cpm--file-upload button' htmlFor='file-upload'>
          Add documentation PDFs:
        </label>
        <input
          id='file-upload' type='file' accept='.pdf' multiple
          onChange={logFiles}
        />

        <hr />

        <button className='button--cta' type='submit' value='Send Request'>
          Create Now
        </button>

      </form>
    </section>
  )
}

export default CreateProjectForm
