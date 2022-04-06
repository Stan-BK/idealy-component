(function() {
  const queue = Array.from(document.getElementsByClassName("queue-item"));
  function setStyle() {
    var len = queue.length;
    queue[0].style.left = "-19%";
    queue[0].style.backgroundColor = "transparent";
    for (let i = 1; i < len; i++) {
      queue[i].style.left = (i - 1) * 20 + 2 + "%";
      if (i !== len - 1) {
        queue[i].style.backgroundColor = "#ddd";
      }
    }
    queue.push(queue.shift());
  }
  setInterval(() => {
    setStyle();
  }, 1000);
})()