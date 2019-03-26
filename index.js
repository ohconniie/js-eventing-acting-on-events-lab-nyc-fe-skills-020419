const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    const currentPosition = parseInt(dodger.style.left)
    dodger.style.left = currentPosition - 5 +'px'
  } else if (event.keyCode === 39) {
    moveDodgerRight()
  }
}

function moveDodgerRight() {
  const currentPosition = parseInt(dodger.style.left)
  dodger.style.left = currentPosition + 5 +'px'
}

document.addEventListener('keydown', onKeyDown)

