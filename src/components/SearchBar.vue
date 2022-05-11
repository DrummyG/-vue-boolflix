<template>
  <header>
    <h1>boolflix</h1>
    <input type="text" v-model="searchName" />
    <button @click="itemFound">Cerca</button>
  </header>
</template>

<script>
import state from "../store";
import axios from "axios";
export default {
  name: "SearchBar",
  props: {},
  data() {
    return {
      searchName: "",
      listaTrovati: [],
      apiPreMov: "https://api.themoviedb.org/3/search/movie?",
      apiPreTv: 'https://api.themoviedb.org/3/search/tv?',
      tipo : 'movie'
    };
  },
  methods: {
    requestMovie(){
      axios.get(this.apiPreMov, {
        params: {
              api_key: "0b5ba28421cd5d17697f81dbe2dd182a",
              query: this.searchName,
            },
      })
    },
    requestTv(){
      axios.get(this.apiPreTv, {
         params: {
              api_key: "0b5ba28421cd5d17697f81dbe2dd182a",
              query: this.searchName,
            },
      })
    },
    itemFound() {
      if (this.searchName !== "") {
        /*Promise.all([this.requestMovie(), this.requestTv()]).then((res) =>{
          console.log(res, res[1])
          state.ricerca(res[0])
          state.compleition(res[1])
        });*/
        axios
          .get(this.apiPreMov, {
            params: {
              api_key: "0b5ba28421cd5d17697f81dbe2dd182a",
              query: this.searchName,
            },
          })
          .then((res) => {
            this.listaTrovati.push(res.data.results);
            state.ricerca(res.data.results);
          });
        axios
          .get(this.apiPreTv, {
            params: {
              api_key: "0b5ba28421cd5d17697f81dbe2dd182a",
              query: this.searchName,
            },
          })
          .then((res) => {
            this.listaTrovati.push(res.data.results);
            state.compleition(res.data.results)
            
          })
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';
header {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: $back;
  h1 {
    color: red;
    font-weight: bolder;
  }
  input {
    background-color: $main;
    border-radius: 20px;
    color: white;
  }
  button {
    border: 2px solid $main;
    border-radius: 5px;
    background-color: $back;
    padding: 5px;
    font-size: large;
    text-transform: uppercase;
    color: white;
  }
}
</style>
