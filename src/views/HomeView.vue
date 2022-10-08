<script setup lang="ts">
import IdealComponent from '@/components/Ideal-component.vue'

const scrollbar = ref()
const bar = ref()
const pY = ref(0)
function updatePY(y: number) {
  pY.value = y
}

onMounted(() => {
  const sb: HTMLElement = scrollbar.value
  const height = sb.getBoundingClientRect().height
  sb.addEventListener('mousedown', (e) => {
    sb.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  })

  function mouseMove(e) {
    pY.value = (e.offsetY + 5) / height
  }

  function mouseUp(e) {
    sb.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }
})
</script>
<template>
  <header class="theme">
    <ideal-component></ideal-component>
  </header>
  <nav class="theme">
    
  </nav>
  <div class="scrollbar-shape theme"></div>
  <div class="scrollbar" ref="scrollbar">
    <div class="bar theme" :style="{ top: `calc(${ pY * 100 }% - 50px)`}" ref="bar"></div>
  </div>
  <easier-scroll :scrollPercentY="pY" @scrollY="updatePY">
    <main class="theme">
      <div style="width: 100%; height: 3000px; background: linear-gradient(white, aqua)"></div>
    </main>
  </easier-scroll>
</template>
<style scoped>
header {
  position: fixed;
  height: 80px;
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 20px;
  padding: 10px 20px 20px 35px;
  user-select: none;
}
nav {
  position: fixed;
  bottom: 0;
  width: 250px;
  height: calc(100vh - 100px);
  border-bottom: none;
  border-left: none;
  border-top-right-radius: 20px;
}
main {
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100vw - 380px);
  height: calc(100vh - 40px);
  border-top-left-radius: 20px;
  border-bottom: none;
  border-right: none;
}
.scrollbar-shape {
  position: fixed;
  bottom: 60px;
  left: 300px;
  width: 30px;
  height: calc(100vh - 220px);
  border-radius: 5px;
}
.scrollbar {
  position: fixed;
  bottom: 60px;
  left: 290px;
  width: 50px;
  height: calc(100vh - 220px);
  border-width: 5px;
}
.bar {
  position: absolute;
  top: 0;
  width: 50px;
  height: 100px;
  border-radius: 20px;
  pointer-events: none;
}
.bar::before {
  position: absolute;
  content: "";
  display: block;
  left: 5px;
  top: 33%;
  width: 30px;
  height: 5px;
  background-color: #666;
  border-radius: 2px;
  pointer-events: none;
}
.bar::after {
  position: absolute;
  content: "";
  display: block;
  left: 5px;
  top: 66%;
  width: 30px;
  height: 5px;
  background-color: #666;
  border-radius: 2px;
  pointer-events: none;
}
</style>