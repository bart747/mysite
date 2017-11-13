
// Since it's about super crucial data I decided to use older JS.
// It's an exception so everything else is setted up with modern JS in mind.

var places = document.getElementsByClassName('liame');

var p1 = 'hello'
var p2 = '.bartosz'
var p3 = 'liamg'

var addr = p1 + p2 + '@' + rev(p3) + '.com'

function rev (s) {
  return s.split('').reverse().join('')
}

(function create () {
  var i = 0
  var l = places.length
  for (i = 0; i < l; i++) {
    places[i].innerHTML = "<a href='mailto:" + addr + "'>" + addr + '</a>'
  }
})()
