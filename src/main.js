import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes: []
})
const pinia = createPinia()


const app = createApp(App)
.use(pinia)
.use(router)
.mount('#app')