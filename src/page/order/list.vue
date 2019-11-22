<template>
    <ul class="orderlist">
        <li v-if="orderlist.length==0" style="width:100%;height:150px;border:0px;">
            <div style="width:100%;height:150px;">当前没有数据</div>
        </li>
        <li v-for="item in orderlist">
            <router-link to="/">
                <div>
                    <div class="orderId">
                        <time>{{item.date}}</time>
                        <p>订单号：{{item.id}}</p>
                    </div>
                    <h3 class="title">{{item.title}}</h3>
                    <p class="sale-info">
                        <span class="sale-price">¥ {{item.price}}</span>
                    </p>
                </div>
                <div class="orderbtn">
                    <div v-if="orderId===0">
                        <van-button plain hairline size="small" type="info">删除订单</van-button>
                        <van-button plain hairline size="small" type="info">提交订单</van-button>
                    </div>
                    <div v-else-if="orderId===1">
                        <van-button plain hairline size="small" type="info">确认收货</van-button>
                    </div>
                    <div v-else-if="orderId===2">
                        <van-button plain hairline size="small" type="info">再次购买</van-button>
                        <!--<van-button plain hairline size="small" type="info">退换货</van-button>-->
                    </div>
                    <div v-else>
                        <van-button plain hairline size="small" type="info">再次购买</van-button>
                        <!--<van-button plain hairline size="small" type="info">退换货</van-button>-->
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import {getOrderlist} from "../../api/page.js";
    import { Button } from 'vant';
    export default {
        components: {
            [Button.name]: Button
        },
        data() {
            return {
                activeName: 0,
                orderlist: []
            };
        },
        props: {
            title: String,
            orderId:Number
        },
        methods: {

        },
        created() {
            getOrderlist(name).then(response => {
                this.orderlist = response;
            })
        }
    }
</script>

<style lang="less">
    .van-tabs {
        padding-top: 10px;
        position: fixed;
        top: 100px;
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        .van-tabs__wrap {
            position: static;
            .van-tabs__nav--card {
                border: 1px solid #1989fa;
                .van-tab {
                    color: #1989fa;
                    border-right: 1px solid #1989fa;
                    &:last-child {
                        border-right: none
                    }
                }
                .van-tab.van-tab--active {
                    color: #fff
                }
                .van-tab--active {
                    background: #1989fa;
                }

            }
        }
        .van-tabs__content--animated {
            overflow: scroll;
            height: 100%;
            padding-bottom: 60px;
        }
    }
    .orderlist {
        li {
            font-size: 14px;
            background: #fff;
            margin-bottom: 10px;
            .orderId {
                //text-align: right;
                padding: 10px 15px 0;
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                time {
                    color: #999
                }
            }
            .title {
                padding: 10px 15px;
            }
            .sale-info {
                padding: 10px 15px;
                color: #f00;
                text-align: right;
            }
            .orderbtn{
                display: flex;
                display: -webkit-flex;
                justify-content:flex-end;
                padding-bottom:10px;
                .van-button{
                    margin-right:15px;
                }
            }
        }
    }

</style>
