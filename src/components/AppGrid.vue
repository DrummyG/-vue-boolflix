<template>
  <div class="container">
      <div class="row flex-nowrap">
          <div class="col-6 col-md-4 col-lg-3 position-relative" v-for="(item, index) in stuff" :key="index">
              <img :src="item.poster_path !== null ? 'http://image.tmdb.org/t/p/w500/' + item.poster_path: 'https://blumagnolia.ch/wp-content/uploads/2021/05/placeholder-126.png'" alt="" class="poster"> 
              <div class="info position-absolute">
                 <p><strong>Titolo:</strong> {{item.name}}{{item.title}}</p>
                <p><strong>Titolo originale:</strong> {{item.original_title}} {{item.original_name}}</p>
                <p><strong>Voto:</strong> <i v-for="(color, index) in rate(item)" :key="index" :class="'fa-solid fa-star ' + color"></i></p>
                <p><strong>Overview:</strong> {{item.overview}}</p>
                <img :src="'https://unpkg.com/language-icons/icons/' + item.original_language + '.svg'" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AppGrid',
    props: {
        stuff: Array
    },
    methods: {
        rate(item){
      let cosa = Math.round(item.vote_average / 2)
      this.listaStelle = []
      for(let i = 0; i < 5; i++){
        if(cosa - i > 0){
          this.listaStelle.push('yellow')
        } else {
          this.listaStelle.push('grey')
        }
      }
      console.log(this.listaStelle)
      return this.listaStelle
    }
    }
}
</script>