import React from 'react'

function CreateProject (props) {
  return (
    <section>
      <h2>Create new project:</h2>
      <div>Creator: {props.userName}</div>
      <form action='/my-handling-form-page' method='post'>
        <label htmlFor='project-name'>Project Name:</label>
        <input type='text' id='project-name' name='project-name' />

        <br />

        <label htmlFor='project-description'>Brief description:</label>
        <input type='text' id='project-description' name='project-description' />

        <br />

        <label htmlFor='project-privacy'>Private?</label>
        <input
          type='checkbox'
          id='project-privacy'
          name='project-privacy'
        />

        <br />

        <label htmlFor='doc-file'>Add documentation PDFs:</label>
        <input
          type='file'
          id='doc-file'
          name='doc-file'
          accept='.pdf'
          multiple
        />

      </form>
    </section>
  )
}

export default CreateProject
