import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import MovieDetails from '../views/MovieDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movies/:id',
      name: 'MoviesDetails',
      component: MovieDetails
    }
  ]
})

export default router
