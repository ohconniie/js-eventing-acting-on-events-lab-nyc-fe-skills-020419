const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this left  
    console.log(dodger.style.left)
  }
}

document.addEventListener('keydown', onKeyDown)