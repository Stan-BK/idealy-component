<script setup lang="ts">
const IdealComponent = 'deal-component'
let idx = 0
const I = ref()
const text = ref('')
const isLoad = ref(false)
function setName() {
  text.value += IdealComponent[idx++]
  if (idx != IdealComponent.length) {
    setTimeout(setName, idx > 4 ? 100 : 300)
  } else {
    isLoad.value = true
  }
}
setTimeout(setName, 1000)

watch(isLoad, () => {
  setTimeout(() => {
    I.value.classList.remove('I-sparkle')
    I.value.classList.add('I-recover')
    setTimeout(() => translateX(120, -38), 1000)
  }, 1000)
})

function translateX(from: number, to: number) {
  let a = Math.max(from, to)
  const b = Math.min(from, to)
  requestAnimationFrame(changeX)

  function changeX() {
    if (a >= b) {
      a -= 2
      I.value.setAttribute('x', a)
      requestAnimationFrame(changeX)
    }
  }
}
</script>
<template>
  <svg width="300" height="50" viewBox="0 0 100 30">
    <text x="-30" y="25">
      <tspan fill="white" class="text">{{ text }}</tspan>
      <tspan fill="white" class="I I-sparkle" ref="I">I</tspan>
    </text>
  </svg>
</template>
<style>
.I {
  position: absolute;
  font-size: 25px;
  transition: font-size 3s 1s;
}
.I-recover {
  font-size: 45px;
}
.I-sparkle {
  animation: sparkle .8s infinite; 
}
@keyframes sparkle {
  from {
    opacity: 0;
  }
}
.text { 
  font-size: 20px;
}
</style>