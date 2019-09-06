<template>
  <div class="foodDetail" v-if="isShow">  
    <!-- 弹出层遮罩 -->
    <div class="alert-cover" @click="toggleShow"></div>
    <div class="alert-content">
      <div class="food-img">
        <img src="./img/food.jpg" alt="">
      </div>
      <h1>{{food.name}}</h1>
      <div>
        <span>月销{{food.sellCount}}份</span>
        <span>好评率{{food.rating}}%</span>
      </div>
      <div>
        ¥{{food.price}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodDetail',
  props:{
    food: Object
  },
  data(){
    return {
      isShow: false
    }
  },
  methods:{
    toggleShow(){
      this.isShow = !this.isShow
    },
  
  }
}
</script>

<style lang="less" scoped>
  .foodDetail {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .alert-cover {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    .alert-content {
       width: 100%;
       height: 50%;
       position: absolute;
       top: 25%;
       background: #fff;
       border-radius: 18px;
       overflow: hidden;
       .food-img {
         height: 80%;
         img {
           width: 100%;
         }
       }
    }
  }
</style>