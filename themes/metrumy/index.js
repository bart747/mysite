import './cookies.js';
import './contact.js';
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw2.js').then(function (registration) {
        console.log('Service worker registration succeeded:', registration);
    }, function (error) {
        console.log('Service worker registration failed:', error);
    });
} else {
    console.log('Service workers are not supported.');
}
*/

window.addEventListener('error', function () {
    if (ErrorEvent.message) {
        console.log('Early errror: ' + ErrorEvent.message);
    }
});

window.setTimeout(window.removeEventListener('error', console.log("Ready and runnin'")), 1000);