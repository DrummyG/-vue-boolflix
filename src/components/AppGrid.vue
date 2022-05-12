<template>
  <div class="container">
    <div class="row flex-nowrap">
      <div
        class="col-6 col-md-4 col-lg-3 position-relative"
        v-for="(item, index) in stuff"
        :key="index"
      >
        <img @mouseover="authorList(item)"
          :src="
            item.poster_path !== null
              ? 'http://image.tmdb.org/t/p/w500/' + item.poster_path
              : 'https://blumagnolia.ch/wp-content/uploads/2021/05/placeholder-126.png'
          "
          alt=""
          class="poster"
        />
        <div class="info position-absolute">
          <p><strong>Titolo:</strong> {{ item.title }}{{ item.name }}</p>
          <p
            :class="
              item.title !== item.original_title
                ? 'show'
                : 'hide' && item.name !== item.original_name
                ? 'show'
                : 'hide'
            "
          >
            <strong>Titolo originale:</strong> {{ item.original_title }}
            {{ item.original_name }}
          </p>
          <p>
            <strong>Voto:</strong>
            <i
              v-for="(color, index) in rate(item)"
              :key="index"
              :class="'fa-solid fa-star ' + color"
            ></i>
          </p>
          <p><strong>Overview:</strong> {{ item.overview }}</p>
          <img :src="nationFlag(item)" alt=""/>
          <p><strong>Attori:</strong></p>
          <p v-for="(actor, index) in actorList" :key="index">{{actor.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "AppGrid",
  props: {
    stuff: Array,
  },
  data(){
      return{
          actorList: []
      }
  },
  methods: {
    rate(item) {
      let cosa = Math.round(item.vote_average / 2);
      this.listaStelle = [];
      for (let i = 0; i < 5; i++) {
        if (cosa - i > 0) {
          this.listaStelle.push("yellow");
        } else {
          this.listaStelle.push("grey");
        }
      }
      return this.listaStelle;
    },
    nationFlag(item){
        if(item.original_language !== 'cn'){
            return 'https://unpkg.com/language-icons/icons/' +
                item.original_language +
             '.svg'
        } else {
            return 'https://www.frosinonecalcio.com/wp-content/uploads/2021/09/default-placeholder.png'
        }
    },
    authorList(item){
        console.log(item.original_name)
        if(item.original_name !== undefined){
             axios.get('https://api.themoviedb.org/3/tv/' + item.id + '/credits?api_key=0b5ba28421cd5d17697f81dbe2dd182a').then((res) =>{
            console.log(res)
            this.actorList = [...res.data.crew]
            if(this.actorList.length > 5){
                this.actorList.splice(5, this.actorList.length - 1)
            }
            console.log(this.actorList)
        })
        } else{
            axios.get('https://api.themoviedb.org/3/movie/' + item.id + '/credits?api_key=0b5ba28421cd5d17697f81dbe2dd182a').then((res) =>{
            console.log(res)
            this.actorList = [...res.data.crew]
            if(this.actorList.length > 5){
                this.actorList.splice(5, this.actorList.length - 1)
            }
            console.log(this.actorList)
        })
        }
    }
  },
};
</script>