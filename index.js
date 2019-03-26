const dodger = document.getElementById('dodger')

function onKeyDown (event) {
  console.log(event)
  if (event.keyCode === 37) {
    console.log(dodger.style.left)
  }
}

dodger.addEventListener('keydown', onKeyDown)