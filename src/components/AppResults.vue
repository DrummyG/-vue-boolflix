<template>
  <main>
      <app-loading v-if="loader == true"/>
      <h2>Movie</h2>
      <app-grid  :stuff="searchName" title="Movie" v-if="loader == false"/>
      <h2>Series</h2>
      <app-grid  :stuff="searchNameTwo" title="Series" v-if="loader == false"/>
  </main>
</template>

<script>
import state from "../store";
import AppGrid from './AppGrid.vue'
import AppLoading from './AppLoading.vue'
export default {
  name: 'AppResults',
  components: {
    AppGrid,
    AppLoading
  },
  data() {
    return {
      listaTrovati: [],
      listaStelle: []
    };
  },
  computed: {
    searchName() {
      return state.itemList;
    },
    searchNameTwo(){
      return state.tvList;
    },
    searchType(){
        return state.tipo
    },
    loader(){
      return state.loading
    }
  },
  methods:{
  }
};
</script>

<style lang="scss">
@import '../assets/style/variables.scss';

main{
  position: relative;
  min-height: calc(100vh - 56px)
}

.container{
  margin-top: 10px;
}

h2{
  margin: 0;
  padding-top: 10px;
  color: red;
  text-align: center;
}

.row{
  margin-top: 50px;
  gap: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: rgba($color: #000000, $alpha: 0.4);
  border-radius: 20px;

  .col-6{
    overflow:hidden;
    position: relative;
    
    
    margin: 0;
    padding: 0;

    .info{
      width: 100%;
      height: 100%;
      padding: 5px;
      top: 500px;
      background-color: rgba($color: #000000, $alpha: 0.7);
      color: white;
      overflow-y: scroll;
      overflow-x: hidden;

      p{
        margin: 0;
        padding: 0;
      }

      .same{
        display: none;
      }

      img{
        width: 50px;
        position: relative;
        left: 80%;
        bottom: 0;
      }

      .grey{
        color: grey;
      }

      .yellow{
        color: yellow;
      }
    }

    &:hover .info{
      top: 0;
      z-index: 100;
      transition: all 1s;
    }
  }
}

.poster{
  width: 100%;
  min-height: 420px;
  position: relative;
}
</style>