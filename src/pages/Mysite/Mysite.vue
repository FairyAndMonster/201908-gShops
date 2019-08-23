<template>
  <div class="MySite">
    

    <HeaderTop :title="address.name">
      <div class="headerLeft" slot="left">
        <i class="el-icon-search"></i>
      </div>
      <div class="headerMiddle ellipsis">
        
      </div>
      <!-- <router-link class="headerRight" slot="right" to="{{userInfo?./Profile:./Login}}">
        <div v-if="!userInfo">
          <span>登录</span>
          <span>注册</span>
        </div>
            
          <div class="demo-basic--circle" v-else>
              <div class="block"><el-avatar :size="30" :src="circleUrl"></el-avatar></div>
          </div>
      </router-link> -->
       <div class="headerRight" slot="right">
         <router-link to="./Login" v-if="!userInfo">
            <span>登录</span>
            <span>注册</span>
         </router-link>
        <router-link to="./Profile" class="demo-basic--circle" v-else>
          <div class="block"><el-avatar :size="30" :src="circleUrl"></el-avatar></div>
        </router-link>
        
       </div>
    </HeaderTop>
    
    <section>
      <div class="goodsSwiper swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
            <ul class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
              <li v-for="(category,index) in pages" :key="index">
                  <img src="./img/hb.jpg" alt="">
                  <p>{{category.title}}</p>
              </li>
            </ul>
        </div>        
      </div>
      <div class="goodsSwiper swiper-container" v-else>
        <div class="swiper-wrapper">
            <ul class="swiper-slide">
              <img src="./img/msite_back.svg" alt="back">  
            </ul>
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
import {mapState} from 'vuex'
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
  data(){
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sizeList: ["large", "medium", "small"]
    }
  },
  mounted(){
    this.$store.dispatch('getAddress');
    this.$store.dispatch('getCategorys');
    //this.$store.dispatch('getShops');
  },
  methods:{
    // goLogin(){
    //   alert(1)
    //   this.$router.push('/Login')
    // }
  },
  computed:{
   ...mapState(['address','categorys','userInfo']),
   categorysArr(){
     const {categorys} = this;
     //二维数组
     const arr = [];
     //二维数组中的一位数组,最大长度为8
     let minArr = [];
     categorys.forEach( data => {
       if(minArr.length === 8){
         //如果长度为8，创建一个新数组
         minArr = [];
       }
       //构建二维数组
       if(minArr.length === 0){
         arr.push(minArr)
       }
       //将当前数据保存到minArr
        minArr.push(data)
     });
     return arr
   }
  },
  watch:{
    //categorys中有数据了，但是界面还没有异步更新
    categorys(value){
      //数据更改之后立即调用，等待DOM更新
      this.$nextTick(()=>{
        //DOM更新后执行回调
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
      })
    }
  }
}
</script>

<style scoped lang="less">
.MySite{
  height: 90%;
  section {
    height: 100%;
  }
  .swiper-container {
    height: 30%;
  }
  .goodsSwiper {
    padding-top: 15px;
      li {
        float: left;
        width: 25%;
        text-align: center;
        img {
            width: 60px;
          }
          p {
            padding: 5px 0;
          }
      }
    
  }
  .goodsList {
    padding: 10px;
    height: 60%;
    overflow-y: auto;
  }
}

</style>

