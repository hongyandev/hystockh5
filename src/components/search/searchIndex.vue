<template>
    <div>
        <van-search :style="searchstyle" v-model="value" ref="termStart" placeholder="请输入订单号" show-action shape="round" @click="showDatePicker('termStart')">
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <van-popup v-model="isPopShow" position="bottom">
            <van-datetime-picker @cancel="cancelPicker" @confirm="confirmPicker" type="date"
                                 :formatter="formatter" :min-date="minDate" :max-date="maxDate"
            v-model="currentDate"/>
        </van-popup>
    </div>
</template>

<script>
import { Search } from "vant";
import { Popup } from 'vant';
import { DatetimePicker } from 'vant';

export default {
    name:'searchIndex',
    components:{
        [Search.name]:Search,
        [DatetimePicker.name]:DatetimePicker,
        [Popup.name]:Popup
    },
    data(){
        return{
            value:"",
            searchstyle: {
                position:"fixed",
                top:"50px",
                width:"96%",
            },
            isPopShow: false, // 弹出层隐藏与显示
            datePicker: '', // 用于判断哪个选择器的显示与隐藏
            minDate: new Date(1900,0,1),
            maxDate: new Date(2099,12,30),
            currentDate: new Date()
        }
    },
    methods:{
        showDatePicker(picker) { //弹出层并显示时间选择器
            this.isPopShow = true;
            this.datePicker = picker;
        },
        cancelPicker() { // 选择器取消按钮点击事件
            this.isPopShow = false;
            this.datePicker = "";
        },
        onSearch() {
            console.log(this.value);
            this.show = true;
        },
        confirmPicker(value) {// 确定按钮，时间格式化并显示在页面上
            var date = value;
            var m = date.getMonth() + 1;
            var d = date.getDate();
            if (m >= 1 && m <= 9) {
                m = "0" + m;
            }
            if (d >= 0 && d <= 9) {
                d = "0" + d;
            }
            var timer = date.getFullYear() + "-" + m + "-" + d;

            this.value = timer;
            this.isPopShow = false;
            this.datePicker = "";
        },
       /* change(e) {
            console.log(e.getValues()) // 打印出了选中的时间，是个数组
        },*/
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`
            }
            return value;
        }
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
