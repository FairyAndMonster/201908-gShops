<template>
  <div>
    <HeaderTop title="搜索">

    </HeaderTop>
    <section>
      <input type="text" placeholder="请输入商家或美食名称">
      <button>提交</button>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Search',
  components: {
    HeaderTop
  }
}
</script>

<style lang="less" scoped>
 
  section {
    padding: 10px;
    input {
      height: 40px;
      background: rgba(0,0,0,0.1);
      width: 76%;
    }
    button {
      height: 40px;
      width: 80px;
      background: green;
      color: #fff;
      font-size: 16px;
    }
  }
</style>

