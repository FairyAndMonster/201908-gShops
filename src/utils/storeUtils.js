import store from 'store'
const USER_INFO = 'user_info'
export default {
  // 存储用户信息
  saveUser(user){
    store.set(USER_INFO, user)
  },
  //取出用户
  getUser(){
    return store.get(USER_INFO)
  },
  
  // 删除用户
  removeUser(){
    return remove(USER_INFO)
  }


}