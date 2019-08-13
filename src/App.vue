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
  methods:{
  },
  mounted(){
   // const geohash = 40.10038,116.36867;
   //this.$store.dispatch('getAddress')
   //this.$store.dispatch('getCategorys')
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
