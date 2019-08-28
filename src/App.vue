<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqAddress,reqCategorys} from './api/index.js'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  data(){
    return {
      count: 0
    }
    
  },
  mounted(){
   this.getUserInfo();
  },
  methods:{
    ...mapActions(['getUserInfo'])
  },
  computed:{
    
  },
  
  created(){
    //在页面加载时取出sessionStorage中的数据
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      )
      sessionStorage.removeItem("store")
    }
    //在页面刷新时将vuex中的数据存储到sessionStorage中
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  .footerGuide {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
  }
}
</style>
