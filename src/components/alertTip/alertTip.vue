<template>
  <div class="alertTip">
    <!-- 弹出层遮罩 -->
    <div class="alertCover"></div>
    <div class="alertContainer">
      <div class="alertTitle">
        <i class="el-icon-warning-outline"></i>
        <p>{{tipText}}</p>
        
      </div>
      <div class="alertBottom" @click="closeTip">确认</div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    tipText: String
  },
  methods:{
    closeTip(){
      this.$emit('closeTip')
      
    }
  }
}
</script>

<style lang="less" scoped>

.alertTip {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .alertCover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
 .alertContainer {
   width: 300px;
   height: 200px;
   background: #FFF;
   z-index: 11;
   position: fixed;
   top: calc(50% - 100px);
   left: calc(50% - 150px);
   .alertTitle {
     text-align-last: center;
     i {
      font-size: 100px;
      color: orange;
     }
     p {
       font-size: 18px;
     }
   }
  .alertBottom {
   position: absolute;
    height: 50px;
    line-height: 50px;
    background: aqua;
    bottom: 0;
    width: 100%;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
 }
 
}

</style>
