import './cookies.js'
import './contact.js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
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

window.addEventListener('error', () => {
  if (ErrorEvent.message) {
    console.log('Early errror: ' + ErrorEvent.message)
  }
})

window.setTimeout(
  window.removeEventListener('error', console.log("Ready and runnin'")),
  1000
)

ReactDOM.render(<App />, document.getElementById('react-test') )
