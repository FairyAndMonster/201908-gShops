import state from "./state";
//引入api接口函数
import { reqAddress, reqCategorys, reqShops, reqLogout, reqUserInfo, reqFoods,reqInfo } from '../api/index'
import { 
  RECEIVE_ADDRESS, 
  RECEIVE_CATEGORYS, 
  RECEIVE_SHOPS, 
  RECEIVE_USER_INFO, 
  USER_LOGOUT, 
  RECEIVE_GOODS, 
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT 
} from './mutation-types'

import mutations from "./mutations";
import { async } from "q";
/**
 * actions:通过操作mutations间接更新states的多个方法的对象
 */
export default {
  async getAddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude;
    //发送异步请求
    const res = await reqAddress(geohash);
    //提交一个mutation
    if(res.code === 0){
      const address = res.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit}){
    const res = await reqCategorys(); 
    if(res.code === 0){
      const categorys = res.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops({commit}){
    let latitude = state.latitude;
    let longitude = state.longitude;
    const res = await reqShops(latitude, longitude);
    if(res.code === 0){
      const shops = res.data;
      //console.log(shops)
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步获取用户信息
  saveUserInfo({ commit },userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //根据会话获取用户信息
  async getUserInfo({commit}){
    const res = await reqUserInfo();
    if(res.code === 0){
      const userInfo = res.data;
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },
   
  //用户退出
  async logout({ commit }){
    const res = await reqLogout();
    if (res.code === 0){
      commit(USER_LOGOUT)
    }
  },

  //异步请求goods
  async getGoods({commit},callback){
    const res = await reqFoods();
    if(res.code === 0){
      const goods = res.goods;
      commit(RECEIVE_GOODS,{goods});
      callback && callback();
    }
  },
  //异步请求店铺信息
  async getInfo({commit}){
    const res = await reqInfo;
    if(res.code === 0){
      const info = res.info;
      commit(RECEIVE_INFO,{info})
    }
  },
  //同步
  handleShopCar({commit},{isAdd,food}) {
    if(isAdd){  //点击增加
      commit(INCREMENT_FOOD_COUNT,{food})
    } else {    //点击减少
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  }

}