<template>
  <div>
    <ul>
        <li>
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
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  
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

