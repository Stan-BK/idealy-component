const games = Array.from(document.getElementsByClassName('loading-game')[0].getElementsByTagName('div'))
const len = games.length
let curIdx = 0

games.forEach(elem => {
  elem.style.visibility = 'hidden'
  elem.addEventListener('animationend', function() {
    curIdx = ++curIdx >= len ? 0 : curIdx
    elem.className = elem.className.replace(' curRotate', '')
    elem.style.visibility = 'hidden'
    startRotate()
  })
})
startRotate()
function startRotate() {
  const elem = games[curIdx]
  elem.style.visibility = 'visible'
  elem.className += ' curRotate'
}