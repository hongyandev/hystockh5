<template>
    <div>
        <van-nav-bar :title="title" fixed  right-text="消息" @click-left="onClickLeft"  @click-right="onClickRight">
            <van-icon name="shop-o" slot="left" />
            <van-icon name="chat-o" slot="right"/>
        </van-nav-bar>
    </div>
</template>

<script>
import { NavBar , Icon} from 'vant';
export default {
    name:'indexNav',
    components:{
         [NavBar.name]: NavBar,
         [Icon.name]: Icon ,

    },
    props:{
        title:String,
    },
    methods: {
        onClickLeft() {
            var self = this;
            self.$router.push({path: '/jxslist'})

        },
        onClickRight(){
            var self = this;
            self.$router.push({path: '/noticelist'})
        }
    }
}
</script>

<style lang="less">
    .van-nav-bar{
        .van-icon{
            font-size:24px;
        }
        .van-nav-bar__title{
            margin:0 auto;
            width:50%;
        }
    }

</style>
