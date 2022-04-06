const stack = document.getElementsByClassName('stack-item')

function initPos() {
  for (let i = 0; i < stack.length; i++) {
    stack[i].style.top =  (i * 20 + 2) + '%'
  }
}
initPos()