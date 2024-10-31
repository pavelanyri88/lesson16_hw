<template>
  <header>
    <h1>Поиск фильмов и топ-20</h1>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/movies">Найти фильм</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 20px;
}
</style>
