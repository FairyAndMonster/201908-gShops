<template>
  <!-- <section class="star" :class="'star-'+size">  -->
    <div :class="'star-'+size">
      <!-- <span class="star-item on"></span>
      <span class="star-item on"></span>
      <span class="star-item on"></span>
      <span class="star-item on"></span> -->
      <span class="star-item" v-for="(sc,index) in starsArr" :key="index" :class="sc"></span>
    </div>
  
</template>

<script>
export default {
   props: {
    score: Number,
    size: Number
  },
  mounted(){
   
  },
  computed: {
    starsArr(){
      const {score} = this;
      const scArr = [];
      const starsOn = Math.floor(score);
      for(let i = 0;i < starsOn;i++){
        scArr.push('on');
      }
      const starsHalf = score*10 - starsOn*10;
      if(starsHalf >= 5){
        scArr.push('half');
      }
      while(scArr.length < 5){
        scArr.push('off');
      }
      return scArr
    }
  }
}
</script>

<style lang="less" scoped>

.star-24 {
  width: 100px;
  height: 20px;
  display: inline-block;
  .star-item {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .on {
    background: url(./img/star24_on@2x.png) no-repeat;
  }
  .half {
    background: url(./img/star24_half@2x.png) no-repeat;
  }
  .off {
    background: url(./img/star24_off@2x.png) no-repeat;
  }
}
</style>
