<template>
  <div class="order">
    
    <HeaderTop title="订单列表">

    </HeaderTop>
    <section>
      <div class="orderContain">
        <p>登录后查看外卖订单</p>
        <button>立即登录</button>
      </div>
      
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Order',
  components: {
    HeaderTop
  }
}
</script>

<style lang="less" scoped>
  .order {
    height: 90%;
  }

  section {
    height: calc(100% - 45px);
    background: url(./img/order.jpg);
    background-size: 100%;
    .orderContain {
      height: 100%;
      text-align: center;
      padding-top: 26%;
      color: #fff;
    p {
        color: #ccc;
        font-size: 18px;
        margin-bottom: 10px;
      }

      button {
        height: 40px;
        width: 80px;
        background: green;
        color: #fff;
        font-size: 16px;
      }
    }
  }

</style>


