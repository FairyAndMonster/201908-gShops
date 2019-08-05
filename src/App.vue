<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
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
