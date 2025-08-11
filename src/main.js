import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '../src/router/router.js'

const app = createApp(App)

app.use(createPinia()) // primero Pinia
app.use(router)        // después router
app.mount('#app')
