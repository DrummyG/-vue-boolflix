<template>
  <div class="container">
      <div class="row flex-nowrap">
          <div class="col-6 col-md-4 col-lg-3 position-relative" v-for="(item, index) in stuff" :key="index">
              <img :src="item.poster_path !== null ? 'http://image.tmdb.org/t/p/w500/' + item.poster_path: 'https://blumagnolia.ch/wp-content/uploads/2021/05/placeholder-126.png'" alt="" class="poster"> 
              <div class="info position-absolute">
                 <p><strong>Titolo:</strong> {{item.name}}{{item.title}}</p>
                <p :class="(item.title !== item.original_title)? 'show': 'hide' &&(item.name !== item.original_name)? 'show': 'hide'"><strong>Titolo originale:</strong> {{item.original_title}} {{item.original_name}}</p>
                <p><strong>Voto:</strong> <i v-for="(color, index) in rate(item)" :key="index" :class="'fa-solid fa-star ' + color"></i></p>
                <p><strong>Overview:</strong> {{item.overview}}</p>
                <img :src="'https://unpkg.com/language-icons/icons/' + item.original_language + '.svg'.statusCode !== '404'? 'https://unpkg.com/language-icons/icons/' + item.original_language + '.svg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII=' " alt="">
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