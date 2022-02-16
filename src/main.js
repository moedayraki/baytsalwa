import { createApp } from 'vue'
import './tailwind.css'
import 'flowbite';
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Loading from './components/Loading.vue'
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.component('nav-bar', NavBar)
app.component('loading-comp', Loading)
app.mount('#app')
