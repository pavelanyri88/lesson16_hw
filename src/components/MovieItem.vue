<template>
  <router-link :to="`/movies/${movie.imdb_id}`">
    <div class="movie-item">
      <h3>{{ movie.title }}</h3>
      <p v-if="movie.rating">Рейтинг: {{ movie.rating }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['movie']
};
</script>
