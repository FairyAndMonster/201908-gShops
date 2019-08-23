<template>
  <div class="login">
    <div @click="$router.back()"><i class="el-icon-arrow-left"></i></div>
    <div class="loginContain">
      <h3>硅谷外卖</h3>
      <form action="" @submit.prevent="getFormData">
        <div class="formTab">
          <span :class="{on:loginWay}" @click="msgLogin">短信登录</span>
          <span :class="{on:!loginWay}" @click="pwdLogin">密码登录</span>
        </div>
        <!-- 短信登录 -->
        <div class="tabContent" v-show="loginWay">
          <div class="fromItem">
            <input type="number" placeholder="手机号" v-model="phone" :disabled="countTime > 0">
            <span class="code" :class="{on:vertifyPhone}" @click="getCode" v-if="countTime == 0">获取验证码</span>
            <span class="countDownNum" v-else>已发送{{countTime}}</span>
          </div>
          <div class="fromItem">
            <input type="number" placeholder="验证码" v-model="code">
          </div>
        </div>
        <!-- 密码登录 -->
        <div class="tabContent" v-show="!loginWay">
          <div class="fromItem">
            <input type="text" placeholder="手机/邮箱/用户名" v-model="name">
          </div>
          <div class="fromItem">
            <input type="text" placeholder="密码" v-show="value" v-model="pwd">
            <input type="password" placeholder="密码" v-show="!value" v-model="pwd"> 
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </div>
          <div class="fromItem">
            <input type="text" placeholder="验证码" v-model="captcha">
            <!-- 图形验证码 -->
            <img class="captcha" ref="captcha" src="http://localhost:4000/captcha" alt="" @click="clickChangeCaptcha">
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
    <alertTip v-show="alertIsShow" :tipText="tipText" @closeTip="closeTip"></alertTip>
  </div>
</template>
<script>
import alertTip from '../../components/alertTip/alertTip'
import { reqMsgLogin, reqSendCode, reqPwdLogin } from '../../api/index.js'
export default {
  components: {
    alertTip
  },
  data() {
    return {
      loginWay: false,
      phone: '',  //手机号
      code: '',   //验证码
      name: '',   //用户名
      pwd: '',    //密码
      captcha: '',  //图形验证码
      clickGetCode: true,
      countTime: 0,
      value: true,  //开关开启
      alertIsShow: false, //是否显示提示框
      tipText: ''   //提示语
    }
  },
  methods: {
    //短信登录
    msgLogin() {
      this.loginWay = true;
    },
    //密码登录
    pwdLogin() {
      this.loginWay = false;
    },
    //点击获取验证码
    async getCode() {
      //验证手机号是否合格
      if (!(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(this.phone)) {
        this.alertShow('请检查手机号是否正确！');
        return
      }
      //倒计时发送验证码    
      this.countTime = 30;
      this.timeId = setInterval(() => {
        this.countTime--;
        if (this.countTime === 0) {
          clearInterval(this.timeId)
        }
      }, 1000)
      //发送短信验证码请求请求
      res = await reqSendCode(this.phone);
      if (res.code === 1) {
        //清除定时器
        //判断是否倒计时
        if (this.countTime) {
          clearInterval(this.timeId)
          this.alertShow(res.msg)
          this.countTime = 0;
        }
      } else {

      }
    },
    //提示框
    alertShow(tipText) {
      this.alertIsShow = true;
      this.tipText = tipText
    },
    //表单提交
    async getFormData() {
     // debugger
      const { phone, pwd, name, captcha } = this;
      //存储用户信息
      let res;
      //判断是短信验证码登录还是密码登录
      if (this.loginWay) {   //短信登录
        //验证手机号是否合格
        if (!(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(this.phone)) {
          this.alertShow('手机号不正确！')
        } else if (!(/^\d{6}$/).test(this.code)) {   //验证短信验证码
          this.alertShow('短信验证码不正确！')
        }
      } else {         //密码登录
        if (!this.name) {   //用户名验证
          this.alertShow('用户名不能为空！')
          return
          alert('用户名不能为空！')
        } else if (!this.pwd) { //密码验证
          this.alertShow('密码不能为空！')
          return
        } else if (!this.captcha) { //图形验证码验证
          this.alertShow('验证码不能为空！')
          return
        }
        //debugger
        //发送密码登录请求
        res = await reqPwdLogin({ name, pwd, captcha });
        //存储用户信息


      }
      console.log(res)
      //请求成功
      if(res.code === 0){       
        //路由跳转到个人中心页面
        this.$router.replace('/profile')
        //存储登录信息到vuex
        let userInfo = res.data;
        console.log(userInfo)
        this.$store.dispatch('saveUserInfo',userInfo);
      } else {
        //刷新图形验证码
        this.clickChangeCaptcha()
        //错误提示
        this.alertShow(res.msg)
      }
    },
    //关闭提示框
    closeTip() {
      this.alertIsShow = false;
      this.tipText = ''
    },
    //点击切换图片验证码
    clickChangeCaptcha() {
      //加时间戳，请求最新的图形验证码
      //event.target.src = "http://localhost:4000/captcha?time=" + Date.now()
      //console.log(event.target.src)
      this.$refs.captcha.src = "http://localhost:4000/captcha?time=" + Date.now()
    }
  },
  computed: {
    vertifyPhone() {
      return (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(this.phone)
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  padding: 10px;
  position: relative;
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
      .code {
        color: #ccc;
      }
      .on {
        color: #000;
        cursor: pointer;
      }
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
        outline: none;
      }
      .captcha {
        width: 100px;
        float: right;
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
