 <template>
  <section>
    <!-- 食物分类列表 -->
    <aside>      
      <ul>
        <li v-for="(item,index) in foodList" :key="index">{{item.name}}</li>
      </ul>     
    </aside>
     <!-- 食物详情 -->
     <ul class="container" v-for="(item,index) in foodList" :key="index">
       <li v-for="(food,index) in item.value" :key="index">
         <div class="food-pic">
            <img src="./img/food.jpg">
          </div>
          <div class="food-desc">
            <h3>{{food.title}}</h3>
            <div>
              <span>{{food.monthlySale}}</span>
              <span>{{food.praise}}</span>
              <span>点评网友推荐</span>
            </div>
            <div>
              <span>{{food.nowPrice}}</span>
              <span>{{food.oldPrice}}</span>
            </div>
            <div>
              <span>{{food.discountedPrice}}</span>
              <span>{{food.limit}}</span>
            </div>
          </div>
       </li>
       
     </ul>
  </section>
</template>

<script>
import {reqFoods} from '../../../api/index.js'
export default {
  name: 'Foods',
  data(){
    return {
      foodList: []
    }
  },
  async mounted(){
    const res = await reqFoods();
    if(res.code === 0){
      this.foodList = res.data;
    }
    console.log(res)
  }
}
</script>

<style lang="less" scoped>
  section {
  overflow: hidden;
  margin-top: 10px;
  }
 aside {
  float: left;
  width: 100px;
  background: rgba(0,0,0,0.1);
  li {
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
}
.container {
  width: calc(100% - 100px);
  float: left;
  padding-left: 10px;
  box-sizing: border-box;
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
    text-align: center;
  }
}
</style>
