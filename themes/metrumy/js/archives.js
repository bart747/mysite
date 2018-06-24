const btn = document.getElementById("archives-button");
const content = document.getElementById("archive");

btn.addEventListener("click", ()=> {
  content.classList.toggle("display-none");
}, false);

