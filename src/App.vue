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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
