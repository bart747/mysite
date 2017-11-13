require('../sass/main.scss')
require('./contact.js')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(console.log('Service Worker Registered'))
}

console.log("rock'n'roll!")
