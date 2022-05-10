import Vue from 'vue';
const state = Vue.observable({
    itemList : [],
    tvList: [],
    tipo: '',
    completo: [],
    ricerca(val){
        this.itemList = []
        this.itemList = val
        console.log(this.itemList)
    },
    compleition(val){
        this.tvList = []
        this.tvList = val
        console.log(this.tvList)
        this.completo = this.tvList.concat(this.itemList)
        console.log(this.completo)
    }
});
export default state