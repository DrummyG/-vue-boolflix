<template>
  <main>
    <app-loading v-if="loader == true" />
    <div class="d-flex justify-content-center align-items-center">
      <h2>Movie</h2>
      <select name="genereMovie" id="genereMovie" v-model="filtroMovie">
        <option value="">all</option>
        <option
          :value="genere.id"
          v-for="(genere, index) in listaMovie"
          :key="'A' + index"
        >
          {{ genere.name }}
        </option>
      </select>
    </div>
    <app-grid
      :stuff="generiMovie"
      title="Movie"
      v-if="loader == false && generiMovie.length > 0"
    />
    <div class="nothing" v-if="(generiMovie.length === 0)">
      <p>Ricerca senza risultati</p>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <h2>Series</h2>
      <select name="genereTv" id="genereTv" v-model="filtroTv">
        <option value="">all</option>
        <option
          :value="genere.id"
          v-for="(genere, index) in listaTv"
          :key="index + 1"
        >
          {{ genere.name }}
        </option>
      </select>
    </div>
    <app-grid
      :stuff="generiTv"
      title="Series"
      v-if="loader == false && generiTv.length > 0"
    />
    <div class="nothing" v-if="(generiTv.length === 0)">
      <p>Ricerca senza risultati</p>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import state from "../store";
import AppGrid from "./AppGrid.vue";
import AppLoading from "./AppLoading.vue";
export default {
  name: "AppResults",
  components: {
    AppGrid,
    AppLoading,
  },
  data() {
    return {
      listaTrovati: [],
      listaStelle: [],
      listaMovie: [],
      listaTv: [],
      filtroMovie: "",
      filtroTv: "",
    };
  },
  computed: {
    searchName() {
      return state.itemList;
    },
    searchNameTwo() {
      return state.tvList;
    },
    searchType() {
      return state.tipo;
    },
    loader() {
      return state.loading;
    },
    generiMovie() {
      if (this.filtroMovie !== "") {
        return this.searchName.filter((el) =>
          el.genre_ids.includes(this.filtroMovie)
        );
      } else {
        console.log(this.searchName)
        return this.searchName;
      }
    },
    generiTv() {
      if (this.filtroTv !== "") {
        return this.searchNameTwo.filter((el) =>
          el.genre_ids.includes(this.filtroTv)
        );
      } else {
        console.log(this.searchNameTwo)
        return this.searchNameTwo;
      }
    },
  },
  methods: {},
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=0b5ba28421cd5d17697f81dbe2dd182a"
      )
      .then((res) => {
        this.listaMovie = [...res.data.genres];
      });
    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=0b5ba28421cd5d17697f81dbe2dd182a"
      )
      .then((res) => {
        this.listaTv = [...res.data.genres];
      });
  },
};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";

main {
  position: relative;
  min-height: calc(100vh - 56px);

  .d-flex {
    margin: 20px;

    select {
      background-color: $back;
      color: white;
      margin-left: 10px;
      margin-bottom: 5px;
    }
  }

  .nothing{
    height: 366.67px;

    p{
      color: white;
      font-size: larger;
      text-align: center;
      line-height: 360px;
    }
  }
}

.container {
  margin-top: 10px;
}

h2 {
  color: red;
  text-align: center;
  display: inline-block;
}

.row {
  margin-top: 50px;
  gap: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: rgba($color: #000000, $alpha: 0.4);

  .col-6 {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;

    margin: 0;
    padding: 0;

    .info {
      width: 100%;
      height: 100%;
      padding: 5px;
      top: 500px;
      background-color: rgba($color: #000000, $alpha: 0.7);
      color: white;
      overflow-y: scroll;
      overflow-x: hidden;

      p {
        margin: 0;
        padding: 0;
      }

      .hide {
        display: none;
      }
      .show {
        display: block;
      }

      img {
        width: 50px;
        margin-top: 10px;
        position: relative;
        left: 80%;
        bottom: 0;
      }

      .grey {
        color: grey;
      }

      .yellow {
        color: yellow;
      }
    }

    &:hover .info {
      top: 0;
      z-index: 100;
      transition: all 1s;
    }
  }
}

.poster {
  max-width: 250px;

  height: 350px;
  position: relative;
}
</style>