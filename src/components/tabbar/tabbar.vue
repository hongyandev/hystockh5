<template>
    <van-tabs type="card" @click="onClick" v-model="activeName" animated>
        <van-tab v-for="item in titles" :title="item">
            <orderlist :order-id="orderId"></orderlist>
            <div style="height:250px;"></div>
        </van-tab>
    </van-tabs>
</template>

<script>
    import {Tab, Tabs} from 'vant';
    import orderlist from '../../page/order/list'

    export default {
        name: 'tabbar',
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            orderlist
        },
        data() {
            return {
                activeName: 0,
                titles: ['未提交', '待收货', '待结款', '已完成'],
                orderlist: [],
                orderId: 0
            };
        },
        props: {
            title: String,
        },
        methods: {
            onClick(name, title) {
                this.orderId = name
            }
        },
        created() {

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
        }
    }
</style>
