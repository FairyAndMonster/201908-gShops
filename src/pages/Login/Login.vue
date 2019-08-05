<template>
  <div class="login">
    <div @click="$router.back()"><i class="el-icon-arrow-left"></i></div>
    <div class="loginContain">
      <h3>硅谷外卖</h3>
      <form action="">
        <div class="formTab">
          <span :class="{}" @click="messageLogin">短信登录</span>
          <span @click="passLogin">密码登录</span>
        </div>
        <div class="tabContent">
          <div class="fromItem">
            <input type="number" placeholder="手机号">
            <span>获取验证码</span>
          </div>
          <div class="fromItem">
            <input type="number" placeholder="验证码">
          </div>
        </div>
        
        <div class="tipText">
          温馨提示:未注册硅谷外卖账号的手机号,登录时将自动注册,且代表已同意<a href="" class="on">《用户服务协议》</a>
        </div>
        <div>
          <button>登录</button>
        </div>
        <a href="">关于我们</a>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  padding: 10px;
  .el-icon-arrow-left {
    font-size: 20px;
  }
  .loginContain {
    text-align: center;
    h3 {
      font-size: 30px;
      color: aquamarine;
      font-weight: 900;
      margin: 10px 0;
    }
    .formTab {
      font: 16px;
      margin: 10px 0;
      
    }
    .on {
        color: aquamarine;
        border-bottom: 1px solid aquamarine;
      }
    .tabContent {
      padding: 0 50px;
      box-sizing: border-box;
    }
    .fromItem {
      margin: 10px 0;
      width: 280px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #ccc;
      border-radius: 5px;
      height: 40px;
      text-align: left;
      input {
       height: 40px;
      }
    }
    .tipText {
      padding: 0 50px;
    }
    button {
      width: 280px;
      margin: 10px 0;
      height: 40px;
      color: #fff;
      font-size: 18px;
      background-color: aquamarine;
    }
  }
}
</style>
