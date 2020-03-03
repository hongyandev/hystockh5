import {request} from "../config/request";

// 商品列表
export function getGoodsList(params) {
    return request({
        remote: true,
        data: params,
        url: "/app/goods/list",
        method: "post",
    })
}

export function getGoodsDetail(params) {
    return request({
        remote: true,
        data: params,
        url: "/app/goods/detail",
        method: "post",
    })
}

export function getGoodsSku(params) {
    return request({
        remote: true,
        data: params,
        url: "/app/goods/sku",
        method: "post",
    })
}