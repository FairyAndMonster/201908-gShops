import state from "./state";
//引入api接口函数
import { reqAddress, reqCategorys, reqShops } from '../api/index'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-types'

import mutations from "./mutations";
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
          console.log(shops)
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}