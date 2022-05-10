<template>
  <main>
      <div class="row" v-for="(item, index) in searchName" :key="index">
          <div class="col-6 col-md-4 col-lg-3">
              <img :src="'http://image.tmdb.org/t/p/w500/' + item.poster_path" alt="">
              <!-- <img :src="'https://flagicons.lipis.dev/flags/4x3/' + item.original_language + '.svg'" alt=""> -->
              <p>{{item.original_title}} {{item.original_name}}</p>
          </div>
      </div>
  </main>
</template>

<script>
import state from "../store";
export default {
  name: 'AppResults',
  data() {
    return {
      listaTrovati: []
    };
  },
  computed: {
    searchName() {
      return state.completo;
    },
    searchType(){
        return state.tipo
    }
  },
};
</script>

<style lang="scss">
</style>