/**
 * ajax请求函数模块
 */
import axios from 'axios'
import { Promise } from 'q';
/**
 * 向外暴露一个函数
 * @param{*} url 请求路径,默认为空
 * @param{*} data 请求参数,默认为空
 * @param{*} type 请求类型,默认为get请求
 */
export default function ajax(url = '',data = {},type = 'get'){
  //返回promise对象
  return new Promise(function(resolve,reject){
    //内部的promise用来保存axios的返回值
    let promise;
    if(type === 'GET'){
      //数据拼接字符串,将data连接到url
      var dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      });
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url);
    } else {
      //发送post请求
      promise = axios.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
  
}
