<template>
  <div class="foodDetail">
    <!-- 弹出层遮罩 -->
    <div class="alert-cover"></div>
    <div class="alert-content">
      <div class="food-img">
        <img src="./img/food.jpg" alt="">
      </div>
      <h1>南瓜粥</h1>
      <div>
        <span>月销91份</span>
        <span>好评率100%</span>
      </div>
      <div>
        ¥9
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    
  
  },
  methods:{
    
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