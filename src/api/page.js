import {request} from "../config/request";
import qs from 'qs';
// import store from "../store/store";
// import {mapGetters} from 'vuex'


export function GetPage() {
    return request({
        url: '/Page/GetPage',
        method: 'get',
    })
}


export function getOrderlist(id) {
    return request({
        url: '/Page/Order',
        method: 'get',
        params: {id},
    })
}

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

//经销商列表
export function getAccounts() {
    return request({
        remote: true,
        url: 'app/my/getAccounts',
        method: 'post',
    })
}

//设置默认经销商
export function setDefaultCompany(params) {
    return request({
        remote: true,
        url: 'app/my/setDefaultCompany',
        method: 'post',
        data: params
    })
}

//用户面版
export function GetUserIndex() {
    return request({
        remote: true,
        url: 'app/my/userPanel',
        method: 'post'
    })
}

//用户面版
export function getUserInfo() {
    return request({
        remote: true,
        url: 'app/my/userInfo',
        method: 'post'
    })
}

//修改用户信息
export function modifyUserInfo(params) {
    return request({
        remote: true,
        url: "/app/my/modifyUserInfo",
        method: "post",
        data: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

//修改绑定手机号
export function changePhone(params) {
    return request({
        remote: true,
        url: "/app/my/changePhone",
        method: "post",
        data: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

//省市区
export function getAddress() {
    return request({
        remote: true,
        url: "/settings/all_district",
        method: "get",
    })
}
export function getCategory(params) {
    return request({
        remote: true,
        data: params,
        url: "/app/category/list",
        method: "post",
    })
}