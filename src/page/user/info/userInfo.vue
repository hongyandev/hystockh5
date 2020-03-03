<template>
    <div>
        <headerNav title="修改我的信息" rightTitle="保存" @rightbtn="save"/>
        <van-cell-group>
            <van-field v-model='data.customerName' label='公司名称' :required="true" placeholder="请输入公司名称"/>
            <van-field v-model='data.companyName' label='供货商' disabled="true"/>
            <van-field v-if="data.customerLevel" v-model='data.customerLevel' label='等级' disabled="true"/>
            <van-field label='省市区' :value="areaName" placeholder="请选择省市区" :readonly='true' @click="clickAddress"/>
            <van-popup v-model="showaddress" position="bottom">
                <van-area v-show="showaddress" :value="data.district" :area-list="areaList" :columns-num="3" :loading="areaLoading" @cancel="cancel" @confirm="confirm"/>
            </van-popup>
            <van-field v-model="data.adderss" label="详细地址" placeholder="请输入详细地址"/>
            <van-field v-model="data.phone" label="联系电话" placeholder="请输入联系电话"/>
            <van-field v-model="data.taxPayerNo" label="统一社会信用代码" placeholder="请输入统一社会信用代码"/>
            <van-field v-model="data.bank" label="开户行" placeholder="请输入开户行"/>
            <van-field v-model="data.cardNo" label="银行账号" placeholder="请输入银行账号"/>
            <van-field v-model="data.legalPerson" label="法人代表" placeholder="请输入法人代表"/>
        </van-cell-group>
        <loading v-show="loadingShow" />
    </div>
</template>

<script>
    import {Field, Picker, Area, Popup} from 'vant';
    import {getUserInfo, modifyUserInfo} from '../../../api/my';
    import {getAddress} from '../../../api/common';
    import loading from '../../../components/common/loading';
    const _ = require('lodash');
    export default {
        components: {
            [Field.name]: Field,
            [Picker.name]: Picker,
            [Area.name]: Area,
            [Popup.name]: Popup,
            loading
        },
        data() {
            return {
                loadingShow: true,
                data: {},
                areaList: {},
                areaObj: [],
                showaddress: false,
                areaLoading: false
            }
        },
        computed: {
            areaName: function () {
                let name = '';
                if(this.areaObj.length === 0){
                    if (_.has(this.data, 'provinceName')){
                        name += this.data.provinceName + ' ';
                    }
                    if (_.has(this.data, 'cityName') && this.data.provinceName !== this.data.cityName) {
                        name += this.data.cityName + ' ';
                    }
                    if (_.has(this.data, 'districtName') && this.data.cityName !== this.data.districtName) {
                        name += this.data.districtName + ' ';
                    }
                } else {
                    _.forEach(this.areaObj, function (item, index) {
                        let v = item.name;
                        if (name.indexOf(v) === -1){
                            name += item.name + ' '
                        }
                    })
                }
                return name;
            }
        },
        methods: {
            save: function () {
                let self = this;
                self.loadingShow = true;
                modifyUserInfo(self.data).then(res => {
                    self.loadingShow = false;
                });
            },
            clickAddress: function () {
                let self = this;
                self.showaddress = true;
                if (!_.has(self.areaList, 'province_list')) {
                    //获取省市区
                    self.areaLoading = true;
                    getAddress().then(res => {
                        self.areaList = res;
                        self.areaLoading = false;
                    });
                }
            },
            cancel: function () {
                this.showaddress = false
            },
            confirm: function (a) {
                this.areaObj = a;
                this.data.provinceName = a[0]['name'];
                this.data.province = a[0]['code'];
                this.data.cityName = a[1]['name'];
                this.data.city = a[1]['code'];
                this.data.districtName = a[2]['name'];
                this.data.district = a[2]['code'];
                this.showaddress = false
            },
            onChange: function () {

            }
        },
        mounted: function () {
            let self = this;
            getUserInfo().then(res => {
                self.data = res
                self.loadingShow = false;
            })
        }
    }
</script>

<style>

</style>
