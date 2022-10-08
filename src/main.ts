import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import EasierScroll from 'easier-scroll-vue'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(EasierScroll)

app.mount('#app')
