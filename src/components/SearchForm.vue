<template>
  <div>
    <input v-model="query" placeholder="Введите название фильма" />
    <button @click="onSearch">Найти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.query);
    }
  }
};
</script>
