class LoadingTree {
  // speed will slower when speed parameter is larger
  constructor(branchLength = 10, deepLimit = 4, speed = 200, angle = 0.5) {
    this.branchLength = branchLength
    this.deepLimit = deepLimit
    this.angle = angle
    const canvas = document.getElementById('canvas')
    this.ctx = canvas.getContext('2d')
    this.frameQueue = []
    this.timer = performance.now()
    this.initStyle()
    this.initTree()
    requestAnimationFrame(drawFrame.bind(this))
    
    function drawFrame(time) {
      if (time - this.timer > speed) {
        this.timer = time
        let newQueue = []
        for (var fnc of this.frameQueue) {
          newQueue = newQueue.concat(fnc())
        }
        if (newQueue[0] == undefined) {
          this.frameQueue.length = 0
          this.initTree()
        } else {
          this.frameQueue = newQueue
        }
      }
      requestAnimationFrame(drawFrame.bind(this))
    }
  }
  
  initStyle() {
    const ctx = this.ctx
    ctx.strokeStyle = "#424242"
    ctx.lineWidth = "3"
    ctx.lineCap = "round"
  }
  
  initTree() {
    const ctx = this.ctx
    const branchLength = this.branchLength
    const deepLimit = this.deepLimit
    const angle = this.angle
    ctx.clearRect(0, 0, 200, 200)
    ctx.beginPath()
    ctx.moveTo(50, 100)
    ctx.lineTo(50, 70)
    ctx.stroke()
    this.frameQueue.push(() => drawTree({ x: 50, y: 70}, 0, - Math.PI))
    
    
    function drawTree(node, deep, theta) {
      ctx.beginPath()
      if (deep++ > deepLimit) { return }
      let x = node.x - branchLength * Math.sin(theta + angle)
      let y = node.y + branchLength * Math.cos(theta + angle)
      draw(node.x, node.y, x, y)
      const fn1 = (function(x, y) {
        return () => drawTree({ x, y }, deep, theta + angle)
      })(x, y)

      x = node.x - branchLength * Math.sin(theta - angle)
      y = node.y + branchLength * Math.cos(theta - angle)
      draw(node.x, node.y, x, y)
      const fn2 = (function(x, y) {
        return () => drawTree({ x, y }, deep, theta - angle)
      })(x, y)
      return [fn1, fn2]
    }
    
    function draw(x1, y1, x2, y2) {
      ctx.save()
      Math.random() > 0.2 ? ctx.strokeStyle = '#666' : ctx.strokeStyle = '#ddd'
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.restore()
    }
  }

}

new LoadingTree(10, 4, 200, .3).initTree()
