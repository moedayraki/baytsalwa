import { createApp } from 'vue'
import { i18n } from './i18n';
import './tailwind.css'
import 'flowbite';
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Loading from './components/Loading.vue'
import mobile from './mixins/mobile.js'
import lang from './mixins/lang.js'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.mixin(mobile)
app.mixin(lang)
app.use(router)
app.use(i18n)
app.component('nav-bar', NavBar)
app.component('loading-comp', Loading)
app.mount('#app')
