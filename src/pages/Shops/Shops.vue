<template>
  <div class="shops">
    <section class="ShopsTop">
      <i class="el-icon-arrow-left" @click="$router.push('/MySite')"></i>
    </section>
    <section class="shopsBottom">
      <ShopsHeader class="shopsHeader"></ShopsHeader>
      <div class="tab">
        <div class="tab-title">
          <keep-alive>
            <router-link to="/Shops/foods" class="tab-item" :class="{active:$route.path === '/Shops/foods'}" replace>点菜</router-link>
          </keep-alive>
          <keep-alive>
            <router-link to="/Shops/comments" class="tab-item" :class="{active:$route.path === '/Shops/comments'}" replace>评价</router-link>
          </keep-alive>
            <keep-alive>
              <router-link to="/Shops/bussness" class="tab-item" :class="{active:$route.path === '/Shops/bussness'}" replace>商家</router-link>
            </keep-alive>
            
        </div>
        <router-view></router-view>       
      </div>
      <!-- 购物车 -->
      <!-- <div class="shopCar">
        <p>满25减14；满49减24；满79减31；满100减45</p>
        <div class="innerShopCar">
          <span class="contact-bussness">
            <i class="el-icon-chat-dot-round"></i>
            <p>联系商家</p>
          </span>
          <span>
            <img src="./img/pslogo.jpg" alt="">
          </span>
        </div>
      </div> -->
    </section>
    <!-- 点击食物弹出层 -->
    <!-- <FoodDetail v-if=""/> -->
  </div>
</template>

<script>
import ShopsHeader from '../../components/shopsHeader/ShopsHeader'
import FoodDetail from '../../components/FoodDetail/FoodDetail'
export default {
  name: 'Shops',
  components:{
    ShopsHeader,
    FoodDetail
  },
}
</script>

<style lang="less" scoped>
.shops {
  width: 100%;
  height: 100%;
  position: relative;
  .ShopsTop{
    height: 30%;
    background: url(./img/bg.jpg) no-repeat;
    background-size: 100%;
    i {
      font-size: 30px;
      color: #fff;
    }
  }
  .shopsBottom {
    height: calc(70% + 50px);
    padding: 0 10px;
    .shopsHeader {
      height: 150px;
      margin-top: -50px;
      box-shadow: #ccc 2px 4px 7px;
      background-color: #fff;
    }
    .tab {
      height: calc(100% - 150px);
      .tab-title {
        display: flex;
      }
      .tab-item {
        flex: 1;
        font-size: 16px;
        text-align: center;
      }
       .active {
        border-bottom: 2px solid orangered;
      }
      .router-link-active {
        border-bottom: 2px solid orangered;
      }
    }
    .shopCar {
        width: 96%;
        height: 80px;
        position: fixed;
        bottom: 0;
        left: 2%;
        background: orange;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
      .innerShopCar {
        height: 60px;
        background:#666;
        border-radius: 30px;
        .contact-bussness {
          color: orange;
          i {
            font-size: 30px;
          }
        }
      }
    }
  }
  
}
</style>
