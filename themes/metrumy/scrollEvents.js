var yPosition = 0;

window.addEventListener('scroll', function () {
  yPosition = window.scrollY;
  window.requestAnimationFrame(function () {
    console.log('scroll event: ' + yPosition);
  });
});