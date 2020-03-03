import axios from 'axios'
import {Toast} from 'vant';
import {baseUrl} from './env';
import datas from '../data/data';
// import store from '../store';
const service = axios.create({
    baseURL: baseUrl, // api 的 base_url
    timeout: 30000, // request timeout
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});

const request = function (parameter) {
    if (parameter.remote) {
        return service(parameter);
    } else {
        //本地数据
        //定义回调函数和axios一致
        const promist = new Promise(function (resolve, reject) {
            var data = datas[parameter.url];
            if (typeof data == 'string') {
                data = JSON.parse(data);
            }
            resolve(data);
        })
        return promist;
    }
}

/*  service.interceptors.request.use(
    config => {
      // Do something before request is sent
    //   if (store.getters.token) {
    //     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //     config.headers['X-Token'] = getToken()
    //   }

      return config
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
  )

  // response interceptor
service.interceptors.response.use(
    //response => response,
    /!**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     *!/
    response => {
      const res = response.data;
      if (res.ResultCode !== 200) {
        // Message({
        //   message: res.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        // // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //   // 请自行在引入 MessageBox
        //   // import { Message, MessageBox } from 'element-ui'
        //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('FedLogOut').then(() => {
        //       location.reload() // 为了重新实例化vue-router对象 避免bug
        //     })
        //   })
        // }
        console.log(1);
        return Promise.reject('error')
      } else {
        if(typeof response.data.Tag=='string'){
          return JSON.parse(response.data.Tag);
        }else{
          return response.data.Tag;
        }
      }
    },
    error => {
      
      return Promise.reject(error)
    }
  )*/

service.interceptors.request.use(config => {
    // let account = store.getters['account/getAccount'];
    // console.log('account', account);
    let token = localStorage.getItem('token');
    let uid = localStorage.getItem('uid');
    if (token && uid) {
        config.headers.token = token;
        config.headers.uid = uid;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

service.interceptors.response.use(res => {
    if (res.data.code != 200) {
        Toast(res.data.message);
    } else {
        return res.data.data;
    }
}, error => {
    return Promise.reject(error);
});

export {request};