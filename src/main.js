import { createApp } from 'vue'
import './tailwind.css'
import 'flowbite';
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import NavBar from './components/NavBar.vue'
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.component('nav-bar', NavBar)
app.mount('#app')
