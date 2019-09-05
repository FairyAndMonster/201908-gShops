<template>
  <div class="shopCar">
    <transition name="move">
      <span class="el-icon-remove-outline" v-if="food.count" @click="handleShopCar(false)"></span>
    </transition>
    
    <span v-if="food.count">{{food.count}}</span>
    <span class="el-icon-circle-plus-outline" @click="handleShopCar(true)"></span>
  </div>
</template>

<script>
export default {
  props:{
    food:Object
  },
  methods:{
    handleShopCar(isAdd){
      this.$store.dispatch('handleShopCar', {isAdd,food:this.food})
    }
  }
}
</script>

<style lang="less" scoped>
  .shopCar {
    float: right;
    .el-icon-remove-outline,.el-icon-circle-plus-outline {
      color: green;
      font-size: 18px;
    }
    .move-enter-active,.move-leave-active {
      transition: all 0.3s;
      
    }
    .move-enter,.move-leave-to {
      opacity: 0;
      transform: translateX(15px) translateY(-10px) rotate(360deg)
    }
  }
</style>