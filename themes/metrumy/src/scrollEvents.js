let yPosition = 0

window.addEventListener('scroll', () => {
  yPosition = window.scrollY
  window.requestAnimationFrame(
    () => {
      console.log('scroll event: ' + yPosition)
    }
  )
})
