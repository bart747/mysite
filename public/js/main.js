require('../../sass/main.scss');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

const logg = console.log("rock'n'roll!");
logg();