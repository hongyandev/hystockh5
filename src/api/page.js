import {request} from "../config/request";

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
