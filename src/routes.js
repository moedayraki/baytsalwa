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
  { path: '/', component: Home, meta: { title: 'Home' }, name: 'Home' },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    name: 'About Us'
  },
  {
    path: '/book',
    meta: { title: 'Lets Book' },
    component: Book,
    name: 'Book Now'
  },
  {
    path: '/gallery',
    meta: { title: 'Gallery' },
    component: Gallery,
    name: 'Gallery'
  },
  {
    path: '/contact',
    meta: { title: 'Reach Us' },
    component: Contact,
    name: 'Reach Us'
  },
  {
    path: '/activities',
    meta: { title: 'Activities' },
    component: Activities,
    name: 'Activities'
  },
  {
    path: '/visit',
    meta: { title: 'Visit Us' },
    component: Visit,
    name: 'Visit Us'
  },
  { path: '/:path(.*)', component: NotFound },
]
