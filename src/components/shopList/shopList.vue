<template>
  <div>
    <ul v-if="shops.length">
        <li v-for="(item,index) in shops" :key="index">
          <div>
            <img src="./img/ym.jpg" alt="">
          </div>
          <div>
            <p>{{item.name}}</p>
            <p>
              <!-- <span>☆☆☆☆</span> -->
              <Star :size="24" :score="item.rating"></Star>
              <span>{{item.rating}}</span>
              <span>月销{{item.rating_count}}单</span>
            </p>
            <p>¥{{item.float_minimum_order_amount}}起送/配送费{{item.float_delivery_fee}}</p>
          </div>
          <div>
            <p>
              保准送
            </p>
            <p>硅谷外卖</p>
          </div>
        </li>

        <!-- <li>
          <div>
            <img src="./img/ym.jpg" alt="">
          </div>
          <div>
            <p>锄禾日当午,汗滴禾下土</p>
            <p>
              <span>☆☆☆☆</span>
              <span>3.6</span>
              <span>月销10086</span>
            </p>
            <p>¥20起送/配送费3</p>
          </div>
          <div>
            <p>
              保准送
            </p>
            <p>硅谷外卖</p>
          </div>
        </li>

        <li>
          <div>
            <img src="./img/ym.jpg" alt="">
          </div>
          <div>
            <p>锄禾日当午,汗滴禾下土</p>
            <p>
              <span class="star">☆☆☆☆</span>
              <span>3.6</span>
              <span>月销10086</span>
            </p>
            <p>¥20起送/配送费3</p>
          </div>
          <div>
            <p>
              保准送
            </p>
            <p>硅谷外卖</p>
          </div>
        </li> -->
      </ul>
      <ul v-else>
        <li v-for="item in 6">
          <img src="./img/shop_back.svg" alt="back">
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Star from '../Star/Star.vue'
export default {
  data(){
    return {
      img_url: './img/'
    }
  },
  components:{
    Star
  },
  mounted(){
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(['shops'])
  }
}
</script>

<style lang="less" scoped>

    ul {
      li {
        display: flex;
        padding: 10px 0;
        div {
          img {
            width: 70px;
          }
        }
        div:first-child,div:last-child{
          flex: 1;
        }
        div:nth-child(2){
          flex: 3;
        }
      }
    }
  
</style>

