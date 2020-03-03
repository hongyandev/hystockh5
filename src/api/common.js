import {request} from "../config/request";

//省市区
export function getAddress() {
    return request({
        remote: true,
        url: "/settings/all_district",
        method: "get",
    })
}