<template>
  <div>
    <HeaderTop title="我的">

    </HeaderTop>
    <section>

        <router-link to="/login" class="login">
          <div>
              <img src="./img/login.jpg" alt="">
            </div>
          <div>
              <p>登录/注册</p>
              <p>暂无绑定手机号</p>
            </div>
          <div class="loginRight">
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
         
      <div class="pay">
        <div>
          <p>
            <span class="num orange">0.00</span>元
          </p>
          <p>我的余额</p>
         </div>
        <div>
          <p>
            <span class="num red">0</span>个
          </p>
          <p>我的优惠</p>
         </div>
        <div>
          <p>
            <span class="num green">0</span>分
          </p>
          <p>我的积分</p>
         </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
  components: {
    HeaderTop
  }
}
</script>

<style lang="less" scoped>
  section {
    padding: 10px;
    .login {
      height: 10%;
      display: flex;
      div:first-child,
      div:last-child {
        flex: 1;
      }
      div:nth-child(2){
        flex: 3;
      }
        img {
          width: 100px;
        }
    }
    .pay {
      display: flex;
      >div {
        flex: 1;
        text-align: center;
        .num {
          font-size: 26px;
          font-weight: 800;
        }
        .orange {
          color: orange;
        }
        .red {
          color: red;
        }
        .green {
          color: aqua;
        }
      }
    }
  }
</style>

