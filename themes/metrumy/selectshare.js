var doc = document;

var articles = [].slice.call(doc.getElementsByClassName('selectable-article'));

articles.forEach(function (el) {
  el.addEventListener('mouseup', composeInfoBoxContent, false);
});

var infoBox = doc.createElement('div');
infoBox.setAttribute('id', 'infobox');
infoBox.style = '\n    background-color: #eeecdd;\n    border-radius: 4px 0 0 0;\n    color: #321;\n    font-size: 14px;\n    max-width: 700px;\n    opacity: 0.9;\n    position: fixed;\n    padding: 0.5em 1em;\n    bottom: 0;\n    right: 0;\n';
var infoBoxTag = doc.createElement('div');
infoBoxTag.textContent = 'copy & share:';
infoBoxTag.style = '\n    font-style: italic;\n    color: #555;\n';
var infoBoxClose = doc.createElement('div');
infoBoxClose.textContent = '+';
infoBoxClose.setAttribute('id', 'infoBoxClose');
infoBoxClose.style = '\n    color: #555;\n    cursor: pointer;\n    font-size: 20px;\n    padding: 0 0.25em;\n    border-radius: 4px;\n    position: absolute;\n    top: 2px;\n    right: 5px; \n    transform: rotate(45deg);\n';
infoBox.appendChild(infoBoxTag);
infoBox.appendChild(infoBoxClose);
var infoBoxContent = doc.createElement('div');
infoBox.appendChild(infoBoxContent);

function reset() {
  var el = doc.getElementById('infobox');
  if (el) {
    el.remove();
  }
}

function composeInfoBoxContent() {
  var selection = window.getSelection().toString();
  var len = selection.length;

  reset();

  if (len > 8 && len <= 200) {
    infoBoxContent.textContent = '\u201C' + selection + '\u201D ' + document.URL;
    doc.body.appendChild(infoBox);
  } else if (len > 200) {
    var short = selection.substr(0, 200);
    infoBoxContent.textContent = '\u201C' + short + '...\u201D ' + document.URL;
    doc.body.appendChild(infoBox);
  }

  infoBoxClose.addEventListener('click', function () {
    return reset();
  }, true);
}