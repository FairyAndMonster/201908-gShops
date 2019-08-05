<template>
  <div>
    <header class="header">
      <slot name="left"></slot>
      <div class="headerMiddle ellipsis">
        {{title}}
      </div>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
export default {
  props:{
    title:String
  }
}
</script>

<style lang="less" scoped>
 .header {
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: green;
    color: #fff;
    padding: 5px 10px;
    box-sizing: border-box;
    .headerLeft {
      flex: 1;
    }
    .headerMiddle {
      flex: 3;
      // width: 250px;
      text-align: center;
      font-size: 18px;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .headerRight{
      flex: 1;
      font-stretch: 18px;
    }
    i {
      font-size: 30px;
    }
    
  }
</style>
