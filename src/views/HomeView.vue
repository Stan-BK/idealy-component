<script setup lang="ts">
import IdealComponent from '@/components/Ideal-component.vue'
</script>
<template>
  <header class="theme">
    <ideal-component></ideal-component>
  </header>
  <nav class="theme">

  </nav>
  <main class="theme">
    
  </main>
</template>
<style scoped>
header {
  position: fixed;
  height: 80px;
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 20px;
  padding: 10px 20px 20px 35px;
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
</style>