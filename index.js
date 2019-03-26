const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this left  
    const currentPosition = parseInt(dodger.style.left)
    dodger.style.left = currentPosition - 5 +'px'
  }
}

document.addEventListener('keydown', onKeyDown)