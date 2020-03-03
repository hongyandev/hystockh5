import {request} from "../config/request";

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

//用户信息
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