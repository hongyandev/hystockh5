<template>
    <van-search :style="searchstyle" v-model="value" placeholder="请输入订单号" show-action shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
    </van-search>
</template>

<script>
import { Search } from "vant";

export default {
    name:'searchIndex',
    components:{
        [Search.name]:Search,
    },
    data(){
        return{
            value:'',
            searchstyle: {
                position:"fixed",
                top:"50px",
                width:"96%",
            },
        }
    },
    methods:{
        onSearch() {
            console.log(this.value);
        },
    },
    computed: {

    },
}
</script>

<style lang="less">
    .van-search{
        padding: 7px 0;
        background: #fff;
        margin:0 2%;
    }
    .van-nav-bar__title{
        margin: 0;
        max-width: 100%;
        padding-left: 40px;
        padding-right: 20px;
    }
</style>
