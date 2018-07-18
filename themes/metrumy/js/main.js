require("../sass/main.scss");
require("./contact.js");
require("./selectshare.js");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      //.then(console.log("Service Worker Registered"))
    ;
  });
}
