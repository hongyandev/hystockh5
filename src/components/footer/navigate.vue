<template>
    <div style="height:50px;">
    <van-tabbar v-model="activeIndex">
        <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="bag-o" to="/search" >商品</van-tabbar-item>
        <van-tabbar-item icon="wap-nav" to="/category" >全部分类</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/cart" >购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/user/index">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
    name:'navigate',
    components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    data() {
        return {
            activeIndex: this.active,
        }
    },
    props: ['active']

}
</script>

