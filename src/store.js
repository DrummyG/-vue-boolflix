import Vue from 'vue';
const state = Vue.observable({
    itemList : [],
    tvList: [],
    completo: [],
    loading: true,
    ricerca(val){
        this.itemList = []
        this.itemList = val
    },
    compleition(val){
        this.tvList = []
        this.tvList = val
        this.completo = []
        this.completo = this.tvList.concat(this.itemList)
        this.loading = false
        console.log(this.completo)
    }
});
export default state