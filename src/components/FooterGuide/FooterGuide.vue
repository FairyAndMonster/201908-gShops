<template>
  <div class="footerGuide">
    <footer>
      <div :class="{on : '/MySite' === $route.path}" @click="goPath('/MySite')">
        <span>
          <i class="el-icon-magic-stick"></i>
        </span>
        <p>首页</p>
      </div>
      <div :class="{on:'/Order' === $route.path}" @click="goPath('/Order')">
        <span>
          <i class="el-icon-notebook-2"></i>
        </span>
        <p>订单</p>
      </div>
      <div :class="{on : '/Search' === $route.path}" @click="goPath('/Search')">
        <span>
          <i class="el-icon-search"></i>
        </span>
        <p>搜索</p>
      </div>
      <div :class="{on:'/Profile' === $route.path}" @click="goPath('/Profile')">
        <span>
          <i class="el-icon-coordinate"></i>
        </span>
        <p>我的</p>
      </div>
    </footer>
    
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
    
  },
  data () {
    return {
      msg: 'Footer'
    }
  },
  methods:{
    goPath(path){
      console.log(path)
      this.$router.replace(path)
    }
  }
}
</script>


<style lang="less" scoped>
footer {
  width: 100%;
  height: 100%;
  line-height: 100%;
  display: flex;
  padding: 10px 0;
  div {
    flex: 1;
    text-align: center;
    p {
      font-size: 16px;
      margin-top: 10px;
    }
    i {
      font-size: 35px;
    }
    
  }
  .on {
      color: green;
    }
}
</style>
