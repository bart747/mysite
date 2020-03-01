import { addFileNames } from '../src/FileSelector.jsx'

let myFiles = []

function getFiles () {
  return [{ name: 'fileone', what: 'nothing' }, { number: 42, name: 'filetwo' }]
}

function setFiles (x) {
  myFiles = x
}

addFileNames(getFiles, setFiles)

test('adds file names from an object to an array', () => {
  expect(myFiles).toEqual(['fileone', 'filetwo'])
})
