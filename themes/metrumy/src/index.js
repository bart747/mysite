import "./cookies.js";
import "./contact.js";
import "./vuetest.vue";

/*
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw2.js").then(function (registration) {
        console.log("Service worker registration succeeded:", registration);
    }, function (error) {
        console.log("Service worker registration failed:", error);
    });
} else {
    console.log("Service workers are not supported.");
}
*/

console.log("I'm runnin'");

const testElement = document.getElementById("jstest");
testElement.innerHTML += "*";
