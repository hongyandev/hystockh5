import {request} from "../config/request";
import qs from 'qs';

//获取验证码
export function getverifycode(params) {
    let phone = {
        phone: params
    };
    return request({
        remote: true,
        url: 'account/verifycode',
        method: 'post',
        data: qs.stringify(phone),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }

    });
    /* var formdata = new FormData();
     formdata.append("phone",params);
     return request({
         remote:true,
         url: 'account/verifycode',
         method: 'post',
         data: formdata,
         headers:{
             "Content-Type": "application/x-www-form-urlencoded"
         }

     })*/
    /*return request({
        remote:true,
        url:'account/verifycode',
        method:'post',
        data:{
            phone:params
        },
         transformRequest: [
             function (data) {
                 let ret = ''
                 for (let it in data) {
                     // 如果 data[it] 是一个对象, 需要先使用 JSON.stringify, 再使用 encode
                     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                 }
                 ret = ret.substring(0, ret.lastIndexOf('&'))
                 return ret
             }
         ],
         headers:{
             "Content-Type": "application/x-www-form-urlencoded"
         }
     })*/
}

//登录
export function applogin(params) {
    return request({
        remote: true,
        url: 'account/appLogin',
        method: 'post',
        data: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function applogout() {
    return request({
        remote: true,
        url: 'account/appLogout',
        method: 'post'
    })
}