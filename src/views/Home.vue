<template>
  <div>
    <Header />
    <h2>Топ-20 фильмов в БД</h2>
    <div class="filters">
      <button @click="filterRating">Высокий рейтинг >9 </button>
      <button @click="filterYear">Новее 2000</button>
    </div>
    <MovieList :movies="filteredMovies" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MovieList from '../components/MovieList.vue';
import axios from 'axios';

export default {
  components: { Header, MovieList },
  data() {
    return {
      movies: [],
      filteredMovies: []
    };
  },
  methods: {
    fetchMovies() {
      axios.get('https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/', {
        headers: {
          'x-rapidapi-key': 'bbb8fa1eb2msh1c6a3ac8f2b32c5p14cf28jsn423043d3cbab',
          'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com',
        },
        params: { page: 1 }
      })
      .then(response => {
        this.movies = response.data.results.slice(0, 20);
        this.filteredMovies = this.movies;
      });
    },
    filterRating() {
      this.filteredMovies = this.movies.filter(movie => movie.rating > 9);
    },
    filterYear() {
      this.filteredMovies = this.movies.filter(movie => new Date(movie.year).getFullYear() > 2000);
    }
  },
  mounted() {
    this.fetchMovies();
  }
};
</script>
