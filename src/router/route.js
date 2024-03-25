// src\router\route.js
import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'

const routes = [
    {path: '/', name: 'Home',  component: Home},
    {path: '/favorites', name: 'Favorites',  component: Favorites},
  ]

  export default routes