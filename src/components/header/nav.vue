<template>
    <van-nav-bar :title="title" left-text="" left-arrow @click-left="onBack" :right-text="rightText" @click-right="click">
        <!--<span slot="right" @click="click">{{rightTitle}}</span>-->
    </van-nav-bar>
</template>

<script>
import { NavBar  } from 'vant';
export default {
    name:'headerNav',
    components:{
         [NavBar.name]: NavBar,
    },
    data() {
        return {
            rightText : this.rightTitle
        }
    },
    props:{
        title:String,
        rightTitle:String
    },
    methods: {
        onBack() {
            history.back();
        },
        click: function () {
            this.$emit('rightbtn')
        }
    }
}
</script>

<style>

</style>
