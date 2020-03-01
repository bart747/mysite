import React, { useState, useEffect } from 'react'
import './componentStyles/fileSelector.css'

function addFileNames (getFilesFunc, setNamesFunc) {
  const files = getFilesFunc()
  const fileNamesTemp = []
  for (let i = 0; i < files.length; i += 1) {
    fileNamesTemp.push(files[i].name)
  }
  setNamesFunc(fileNamesTemp)
}

function FileSelector (props) {
  const messages = {
    noFiles: 'no files',
    select: 'Select PDF files:',
    reSelect: 'Re-select PDF files:'
  }

  const [fileNames, setFileNames] = useState([messages.noFiles])
  const [uploadLabelTxt, setUploadLabelTxt] = useState(messages.select)

  useEffect(() => {
    if (fileNames[0] !== messages.noFiles) {
      setUploadLabelTxt(messages.reSelect)
    }
    if (fileNames.length === 0) {
      setUploadLabelTxt(messages.select)
      setFileNames([messages.noFiles])
    }
  })

  const listFiles = fileNames.map((file, index) =>
    <li key={index}>{file}</li>
  )

  return (
    <section id='cpm'>
      <h2>File Selector:</h2>

      <form
        className='cpm--form'
        action='/my-unexisting-form-handling-page'
        method='post'
      >

        <fieldset>
          <h3 className='list-title'> Selected Files: </h3>
          <ul id='cpm--file-list'>
            {listFiles}
          </ul>

          <label className='cpm--label button' htmlFor='file-upload'>
            {uploadLabelTxt}
          </label>
          <input
            id='file-upload'
            type='file'
            accept='.pdf'
            multiple
            onChange={
              () => addFileNames(
                () => document.getElementById('file-upload').files,
                setFileNames)
            }
          />
        </fieldset>

        <hr />
        <button className='button--cta cpm--button--cta' type='submit' value='Send Request'>
          Send Now
        </button>

      </form>
    </section>
  )
}

export { FileSelector as default, addFileNames }
