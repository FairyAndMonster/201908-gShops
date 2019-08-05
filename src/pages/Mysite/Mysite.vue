<template>
  <div class="MySite">
    

    <HeaderTop title="石景山区苹果园街道实行大街海特东区57号楼">
      <div class="headerLeft" slot="left">
        <i class="el-icon-search"></i>
      </div>
      <div class="headerMiddle ellipsis">
        
      </div>
       <div class="headerRight" slot="right">
        <span>登录</span>
        <span>注册</span>
      </div>
    </HeaderTop>
    
    <section>
      <div class="goodsSwiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul>
              <li>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商品饮品1</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商超便利</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>美食</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>简餐</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商品饮品</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商超便利</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>美食</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>简餐</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商品饮品</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商超便利</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>美食</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>简餐</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul>
              <li>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商品饮品2</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商超便利</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>美食</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>简餐</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商品饮品</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商超便利</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>美食</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>简餐</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商品饮品</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>商超便利</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>美食</p>
                </div>
                <div>
                  <img src="./img/hb.jpg" alt="">
                  <p>简餐</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
      <div class="goodsList">
        <div class="shopHeader">
          <i class="el-icon-position"></i>
          附近商家
        </div>
        <shopList></shopList>
      </div>
    </section>
  </div>
</template>

<script>

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import shopList from '../../components/shopList/shopList'
export default {
  name: 'MySite',
  components: {
    HeaderTop,
    shopList
  },
  mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:{
      stopOnLastSlide: true
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })   
  }
}
</script>

<style scoped lang="less">
.MySite{
 
  .goodsSwiper {
    padding-top: 15px;
    ul {
      li {
        display: flex;
        div {
          flex: 1;
          text-align: center;
          img {
            width: 60px;
          }
          p {
            padding: 5px 0;
          }
        }
      }
    }
  }
  .goodsList {
    padding: 10px;
  }
}

</style>

