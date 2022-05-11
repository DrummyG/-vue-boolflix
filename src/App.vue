<template>
  <div id="app">
    <search-bar />
    <app-results />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import AppResults from './components/AppResults.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    AppResults
  }
}
</script>

<style lang="scss">
@import './assets/style/generals.scss';
#app {
  height: 100%;
  min-width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: $main;
}
</style>
