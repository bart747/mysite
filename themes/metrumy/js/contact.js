
const places = document.getElementsByClassName('liame');

const p1 = 'hello',
      p2 = '.bartosz',
      p3 = 'liamg';

const addr = p1 + p2 + '@' + rev(p3) + '.com'; 

function rev(s) {
  return s.split('').reverse().join('');
}

(function create() {
  let i = 0,
      l = places.length;
  for (i = 0; i < l; i++) {
    places[i].innerHTML = "<a href='mailto:" + addr + "'>" + addr + '</a>';
  }
})();