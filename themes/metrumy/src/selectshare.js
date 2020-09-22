const doc = document

const articles = [].slice.call(doc.getElementsByClassName('selectable-article'))

articles.forEach(el => {
  el.addEventListener('mouseup', composeInfoBoxContent, false)
})

const infoBox = doc.createElement('div')
infoBox.setAttribute('id', 'infobox')
infoBox.style = `
    background-color: #eeecdd;
    border-radius: 4px 0 0 0;
    color: #321;
    font-size: 14px;
    max-width: 700px;
    opacity: 0.9;
    position: fixed;
    padding: 0.5em 1em;
    bottom: 0;
    right: 0;
`
const infoBoxTag = doc.createElement('div')
infoBoxTag.textContent = 'copy & share:'
infoBoxTag.style = `
    font-style: italic;
    color: #555;
`
const infoBoxClose = doc.createElement('div')
infoBoxClose.textContent = '+'
infoBoxClose.setAttribute('id', 'infoBoxClose')
infoBoxClose.style = `
    color: #555;
    cursor: pointer;
    font-size: 20px;
    padding: 0 0.25em;
    border-radius: 4px;
    position: absolute;
    top: 2px;
    right: 5px; 
    transform: rotate(45deg);
`
infoBox.appendChild(infoBoxTag)
infoBox.appendChild(infoBoxClose)
const infoBoxContent = doc.createElement('div')
infoBox.appendChild(infoBoxContent)

function reset () {
  const el = doc.getElementById('infobox')
  if (el) {
    el.remove()
  }
}

function composeInfoBoxContent () {
  const selection = window.getSelection().toString()
  const len = selection.length

  reset()

  if (len > 8 && len <= 200) {
    infoBoxContent.textContent = `“${selection}” ${document.URL}`
    doc.body.appendChild(infoBox)
  } else if (len > 200) {
    const short = selection.substr(0, 200)
    infoBoxContent.textContent = `“${short}...” ${document.URL}`
    doc.body.appendChild(infoBox)
  }

  infoBoxClose.addEventListener('click', () => { return reset() }, true)
}
