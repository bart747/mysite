var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from 'react';
import './componentStyles/fileSelector.css';

function addFileNames(getFilesFunc, setNamesFunc) {
  var files = getFilesFunc();
  var fileNamesTemp = [];
  for (var i = 0; i < files.length; i += 1) {
    fileNamesTemp.push(files[i].name);
  }
  setNamesFunc(fileNamesTemp);
};

function FileSelector(props) {
  var messages = {
    noFiles: 'no files',
    select: 'Select PDF files:',
    reSelect: 'Re-select PDF files:'
  };

  var _useState = useState([messages.noFiles]),
      _useState2 = _slicedToArray(_useState, 2),
      fileNames = _useState2[0],
      setFileNames = _useState2[1];

  var _useState3 = useState(messages.select),
      _useState4 = _slicedToArray(_useState3, 2),
      uploadLabelTxt = _useState4[0],
      setUploadLabelTxt = _useState4[1];

  useEffect(function () {
    if (fileNames[0] !== messages.noFiles) {
      setUploadLabelTxt(messages.reSelect);
    }
    if (fileNames.length === 0) {
      setUploadLabelTxt(messages.select);
      setFileNames([messages.noFiles]);
    }
  });

  var listFiles = fileNames.map(function (file, index) {
    return React.createElement(
      'li',
      { key: index },
      file
    );
  });

  return React.createElement(
    'section',
    { id: 'cpm' },
    React.createElement(
      'h2',
      null,
      'File Selector:'
    ),
    React.createElement(
      'form',
      {
        className: 'cpm--form',
        action: '/my-unexisting-form-handling-page',
        method: 'post'
      },
      React.createElement(
        'fieldset',
        null,
        React.createElement(
          'h3',
          { className: 'list-title' },
          ' Selected Files: '
        ),
        React.createElement(
          'ul',
          { id: 'cpm--file-list' },
          listFiles
        ),
        React.createElement(
          'label',
          { className: 'cpm--label button', htmlFor: 'file-upload' },
          uploadLabelTxt
        ),
        React.createElement('input', {
          id: 'file-upload',
          type: 'file',
          accept: '.pdf',
          multiple: true,
          onChange: function onChange() {
            return addFileNames(function () {
              return document.getElementById('file-upload').files;
            }, setFileNames);
          }
        })
      ),
      React.createElement('hr', null),
      React.createElement(
        'button',
        { className: 'button--cta cpm--button--cta', type: 'submit', value: 'Send Request' },
        'Send Now'
      )
    )
  );
}

export { FileSelector as default, addFileNames };