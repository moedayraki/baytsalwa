import Home from './views/Home.vue'
import About from './views/About.vue'
import Book from './views/Book.vue'
import Contact from './views/Contact.vue'
import Gallery from './views/Gallery.vue'
import NotFound from './views/NotFound.vue'
import Activities from './views/Activities.vue'
import Visit from './views/Visit.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/book',
    meta: { title: 'Lets Book' },
    component: Book,
  },
  {
    path: '/gallery',
    meta: { title: 'Gallery' },
    component: Gallery,
  },
  {
    path: '/contact',
    meta: { title: 'Reach Us' },
    component: Contact,
  },
  {
    path: '/activities',
    meta: { title: 'Activities' },
    component: Activities,
  },
  {
    path: '/visit',
    meta: { title: 'Visit Us' },
    component: Visit,
  },
  { path: '/:path(.*)', component: NotFound },
]
