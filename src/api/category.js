import {request} from "../config/request";

// 商品类别
export function getCategory(params) {
    return request({
        remote: true,
        data: params,
        url: "/app/category/list",
        method: "post",
    })
}