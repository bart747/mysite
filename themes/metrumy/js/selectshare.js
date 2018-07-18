const doc = document;

let articles = [].slice.call(doc.getElementsByClassName("selectable-article"));
let removeClickArea = doc.getElementById("allwrapper");

articles.forEach(el => {
  el.addEventListener("mouseup", composeInfoBoxContent, false);
});

let infoBox = doc.createElement("div");
infoBox.setAttribute("id", "infobox");
infoBox.style= `
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
`; 

function reset() {
  let el = doc.getElementById("infobox");
  if (el) {
    el.remove();
  }
}

function composeInfoBoxContent() {
  let selection = window.getSelection().toString();
  let len = selection.length;

  reset();

  if (len > 8  && len <= 200) { 
    infoBox.textContent = "“" + selection + "”" + "\n" + document.URL;
    doc.body.appendChild(infoBox);
  }
  else if (len > 200) { 
    let short = selection.substr(0, 200);
    infoBox.textContent = "“" + short + "..." + "”" + "\n" + document.URL;
    doc.body.appendChild(infoBox);
  }
}

removeClickArea.addEventListener("mouseup", reset(), false);
