import './cookies.js'
import './contact.js'
import Vue from 'vue'
import App from './Hello.vue'
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
    console.log('Yikes, early errror: ' + ErrorEvent.message)
  }
})

window.setTimeout(
  window.removeEventListener('error', console.log("Ready and runnin'")),
  1000
)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<App/>',
  components: { App }
})
