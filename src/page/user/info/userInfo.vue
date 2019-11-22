<template>
    <div>
        <headerNav title="修改个人信息" rightTitle="保存" @rightbtn="save"/>
        <van-cell-group>
            <van-field v-model='data.customerName' label='用户名' placeholder='请输入用户名' />
            <van-field v-model='data.companyName' label='经销商名称' placeholder='请输入用户名' />
            <van-field v-model='data.customerLevel' label='分销商等级' placeholder='' />
            <van-field v-model='data.district' label='省市区' value="this.district"  @click="clickaddress" />
            <van-popup v-model="showaddress" position="bottom" >
                <van-area :area-list="areaList" :columns-num="3" @cancel="cancel" @confirm="confirm"/>
            </van-popup>
            <van-field v-model="data.adderss" label="详细地址" />
            <van-field v-model="data.phone" label="手机号码" />
            <van-field v-model="data.taxPayerNo" label="税号" />
            <van-field v-model="data.bank" label="开户行" />
            <van-field v-model="data.cardNo" label="银行账号" />
            <van-field v-model="data.legalPerson" label="法人代表" />
        </van-cell-group>
    </div>
</template>

<script>
    import { Field ,Picker ,Area ,Popup} from 'vant';
    import {GetUserIndex , modifyUserInfo ,getAddress} from '../../../api/page.js'
export default {
    components:{
        [Field.name]:Field,
        [Picker.name]:Picker,
        [Area.name]:Area,
        [Popup.name]:Popup
    },
    data(){
        return{
            data:{},
            areaList: [],
            provinceName: '',
            cityName: '',
            districtName: '',
            district:'',
            showaddress:false
        }
    },
    methods:{
        save:function () {
            let self = this;
            let data = self.data;
            modifyUserInfo(data).then(res=>{

            })
        },
        clickaddress:function () {
            this.showaddress = true
        },
        cancel:function () {
            this.showaddress = false
        },
        confirm:function (a) {
            debugger
            console.log(a);
            console.log('this.onAddrConfirm=>e', a);
            this.provinceName = a[0].name;
            this.cityName = a[1].name;
            this.districtName = a[2].name;
            this.district =a[2].code
        },
        onChange:function () {
            
        }
    },
    mounted:function(){
        //获取省
        getAddress().then(res=>{
            debugger
            let self = this;

            console.info(res);
            self.areaList = res
        });
        GetUserIndex().then(res=>{
            this.data = res
        })

    }
}
</script>

<style>

</style>
