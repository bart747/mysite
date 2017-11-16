require('../sass/main.scss')
require('./contact.js')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js')
      .then(console.log('Service Worker Registered'))
  })
}

console.log("rock'n'roll!")
