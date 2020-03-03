import {request} from "../config/request";

export function addCart(params) {
    return request({
        remote: true,
        data: params,
        url: "/app/cart/add",
        method: "post",
    })
}

// 购物车列表
export function getCartsList() {
    return request({
        remote: true,
        url: "/app/cart/list",
        method: "post",
    })
}