 <template>
  <section>
    <!-- 食物分类列表 -->
    <aside class="bscroll" ref="bscroll">    
      <ul class="bscroll-container">
        <li 
            v-for="(item,index) in goods" 
            :key="index"
            @click="menuItemClick($event,index)"
            :class="{active:currentIndex === index}"
            >
              {{item.name}}
            </li>
      </ul>           
    </aside>
     <!-- 食物详情 -->
     <div class="foods" ref="foodBscroll">
       <div>
         <ul class="container" v-for="(item,index) in goods" :key="index" ref="container">
          <li v-for="(food,index) in item.foods" :key="index" @click="clickShowFoodDetail(food)">
            <div class="food-pic">
                <img src="./img/food.jpg">
              </div>
              <div class="food-desc">
                <h3>{{food.name}}</h3>
                <div>
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                  <!-- <span>点评网友推荐</span> -->
                </div>
                <div>
                  <span>¥{{food.price}}</span>
                  <span v-if="food.oldPrice">¥{{food.oldPrice}}</span>
                   <!-- 购物车 -->
                  <shopCar :food="food"/>
                </div>
                <!-- <div>
                  <span>{{food.discountedPrice}}</span>
                  <span>{{food.limit}}</span>
                </div> -->
               
              </div>
             
          </li>    
        </ul>
       </div>
        
     </div>
    <!-- 点击食物弹出层 -->
    <FoodDetail ref="foodDetail" :food="food"></FoodDetail>
  
  </section>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import shopCar from '../../../components/shopCar/shopCar'
import FoodDetail from '../../../components/FoodDetail/FoodDetail'
export default {
  name: 'Foods',
  data(){
    return {
      number: '',
      listHeight: [],
      scrollY: 0,
      food: {}
    }
  },
  components:{
    shopCar,
     FoodDetail
  },
  mounted(){
    this.$store.dispatch('getGoods',()=>{
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      })
    });
  },
  computed:{
    ...mapState(['goods']),
    //计算右侧滚动区间
    currentIndex(){
      for(let i = 0;i < this.listHeight.length;i++){
         let height1 = this.listHeight[i];
         let height2 = this.listHeight[i+1];
         if(this.scrollY > height1 && this.scrollY < height2){
            return i
         }
      }
      //return 0
    }
  },
  methods:{
     //初始化滚动事件
    _initScroll(){
      let bscrollDom = this.$refs.bscroll;
        let bscrollDomFood = this.$refs.foodBscroll;
        //初始化左侧菜单滚动事件
        let scrollMenu = new BScroll(bscrollDom,{
          click: true
        });
        //初始化左右侧食品滚动事件
        this.scrollFood = new BScroll(bscrollDomFood,{
          probeType:3
        });
        this.scrollFood.on('scroll',(pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
          //console.log(scrollY)
        })
    },
    //构建右侧高度数组
    _calculateHeight(){
      let foodList = this.$refs.foodBscroll.getElementsByClassName('container');
      let height = 0;
      this.listHeight.push(height);
      foodList = Array.prototype.slice.call(foodList)
      foodList.forEach(element => {
        height += element.clientHeight;
        this.listHeight.push(height); 
      });
      //console.log(this.listHeight)
    },
    //点击菜单
    menuItemClick(e,index){
      //右侧滑动到相应高度
      //console.log(e)
      const y = this.listHeight[index];
      this.scrollFood.scrollTo(0,-y);
    },
    //点击食物弹出食物详情页
    clickShowFoodDetail(food){
      this.food = food
      this.$refs.foodDetail.toggleShow()
    }
  }
}
</script>

<style lang="less" scoped>
  section {
  overflow: hidden;
  margin-top: 10px;
  height: 100%;
  } 
 aside {
  float: left;
  width: 100px;
  background: rgba(0,0,0,0.1);
  height: 100%;
  overflow: hidden;
  li {
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
  .active {
    background: rgba(0,0,0,0.1);
  }
}
.foods {
  width: calc(100% - 100px);
  float: left;
  padding-left: 10px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  li {
    display: flex;
    height: 120px;
  }
  .food-pic {
    flex: 1;
    img {
      width: 100%;
      height: 70%;
    }
  }
  .food-desc {
    flex: 2;
    padding: 10px;
    .addShopCarBtn {
      float: right;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: green;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-size: 18px;
    }
  }
}
</style>
