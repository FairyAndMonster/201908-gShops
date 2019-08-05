<template>
  <div class="home">
    <div class="leftBar inlineBlock">
        <left-bar></left-bar>
    </div>
    <div class="rightBar inlineBlock">
      <div class="topBar">
        <top-bar></top-bar>
      </div>
    </div>
    
  </div>
</template>

<script>
import leftBar from './leftBar'
import topBar from './topBar'
export default {
  name: 'Home',
  components: {
    leftBar,
    topBar
  },
  data () {
    return {
      msg: 'home'
    }
  }
}
</script>


<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.leftBar {
  width: 200px;
  height: 100%;
  background-color: #304156;
  float: left;
}
.rightBar {
  width: calc(100% - 200px);
  height: 100%;
  float: left;
}
.topBar {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #000;
}
</style>
