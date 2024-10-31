<template>
  <div>
    <Header />
    <h2>{{ movie.title }}</h2>
    <img :src="movie.pic" alt="Картинка" />
    <p>Год выпуска: {{ movie.year }}</p>
    <p>Рейтинг: {{ movie.imDbRating }}</p>
    <p>Описание: {{ movie.description }}</p>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';

export default {
  components: { Header },
  data() {
    return {
      movie: {}
    };
  },
  methods: {
    fetchMovie() {
      axios.get(`https://moviesminidatabase.p.rapidapi.com/movie/id/${this.$route.params.id}`, {
        headers: {
          'x-rapidapi-key': 'bbb8fa1eb2msh1c6a3ac8f2b32c5p14cf28jsn423043d3cbab',
          'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com',
        }
      })
      .then(response => {
        const data = response.data;
        console.log(data.results.title);
        this.movie = {
          title: data.results.title,
          pic: data.results.image_url,
          year: data.results.year,
          imDbRating: data.results.rating,
          description: data.results.description
        };
        })
       .catch(error => {
        console.error("Error fetching movie:", error);
      });
    }
  },
  mounted() {
    this.fetchMovie();
  }
};
</script>
