<template>
  <div class="login">
    <h3>Login form</h3>
    <div class="formContain">
      <el-form ref="form" :model="form" label-width="">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>

           <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
          </el-form-item>
      </el-form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
     form: {
       name: '',
       password: ''
     }
    }
   
  },
  rules:{
    name: [
      {required: true,message:'请输入用户名',trigger:'blur'},
      {min: 3,max: 16,  message: '长度在3-16个字符',trigger: 'blur'}
    ],
    pass: [
      {required: true,message: '请输入密码',trigger: 'blur'},
      {min: 6,max: 6,  message: '长度为6个字符',trigger: 'blur'}
    ]
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
          } else {
            console.log('登录失败,请重新登录');
            return false;
          }
        });
      },
  }
}
</script>


<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #2d3a4b;
  padding-top: 20%;
  h3 {
    color: #fff;
    text-align: center;
  }
  .formContain {
    width: 70%;
    margin: 0 auto;
    form {

    }
  }
}

</style>
