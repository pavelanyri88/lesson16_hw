<template>
  <div class="movie-list">
    <MovieItem v-for="movie in movies" :key="movie.imdb_id" :movie="movie" />
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  props: ['movies'],
  components: { MovieItem }
};
</script>
