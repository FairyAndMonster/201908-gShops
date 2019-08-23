const local = {};
/**
 * 把数据放到本地存储
 * @param {*} key 
 * @param {*} value 
 */
local.set = function(key,value){
  window.localStorage.setItem(key,JSON.stringify(value));
};

/**
 * get 获取本地存储
 * @param {*} key 
 */
local.get = (key) => {
  let obj = window.localStorage.getItem(key);
  if(obj && obj != 'undefined' && obj != 'null'){
    return JSON.parse(obj);
  }
  return '';
};

/**
 * remove 清除本地存储
 * @param {*} key 
 */
local.remove = (key) => {
  if(key){
    window.localStorage.removeItem(key);
  } else {
    for (let i in arguments) {
      window.localStorage.removeItem(arguments[i]);
    }
  }
};

/**
 * seek 检查本地是否有值
 * @param {*} name 
 */
local.seek = (name) => {
  if(!name) return;
  return window.localStorage.hasOwnProperty(name);
}

export default local



