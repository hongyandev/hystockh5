<template>
    <div>
        <van-nav-bar title="登录"/>
        <div :style="logoStyle"></div>
        <div>
            <div>
                <van-cell-group>
                    <van-field v-model="phone" placeholder="请输入手机号"/>
                    <van-field v-model="verifycode" center clearable placeholder="请输入短信验证码">
                        <van-button slot="button" size="small" :disabled="disabled" type="primary"
                                    @click="getVerifycode">{{status ? ('重新获取验证码('+second+'s)') : '获取验证码'}}
                        </van-button>
                    </van-field>
                </van-cell-group>
                <div style="margin: 10px;">
                    <van-button size="large" type="primary" @click="login" style="height: 45px;line-height:45px;">登录
                    </van-button>
                </div>
            </div>
        </div>
        <div>
            <van-dialog v-model="showDialog" title="选择我的供货商" show-cancel-button>
                <van-cell v-for="item in ascounts" @click="jxsclick(item)" title="item.companyName"/>
            </van-dialog>
        </div>
    </div>
</template>

<script>
    import {Cell} from 'vant';
    import {getverifycode, applogin} from "../../api/page.js";
    import {setAccount} from "../../config/common.js";
    let logo = require('../../assets/images/logo.png');
    export default {
        components: {
            [Cell.name]: Cell
        },
        data() {
            return {
                second: 60,
                status: false,
                disabled: false,
                phone: '',
                verifycode: '',
                showDialog: false,
                ascounts: [],
                logoStyle: ''
            }
        },
        props: {},
        methods: {
            phoneNumber(value) {
                if (value && (!(/^[1][34578]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
                    return true
                    //callback(new Error('手机号码不符合规范'))
                }
            },
            getVerifycode() {
                let phone = this.phone;
                if (phone == '') {
                    this.$toast('请输入手机号码！');
                    return false;
                }
                if (this.phoneNumber(phone)) {
                    this.$toast('手机号码不符合规范！');
                    return false
                }
                this.status = true;
                this.disabled = true;
                var time = setInterval(() => {
                    var second = this.second;
                    second--;
                    this.second = second;
                    if (second == 0) {
                        clearInterval(time);
                        this.second = 60;
                        this.status = false;
                    }
                }, 1000);
                getverifycode(phone).then(data => {
                    console.info(data);
                    if (data) {
                        this.verifycode = data;
                    }
                });
            },
            login() {
                let data = {
                    username: this.phone,
                    verifycode: this.verifycode
                };
                applogin(data).then(res => {
                    let self = this;
                    if (res.jwt) {
                        setAccount(res, self);
                        self.$router.push({path: '/home'});
                    } else {
                        self.show = true;
                        self.accounts = res.accounts;
                    }

                })
            },
            jxsclick(item) {
                let self = this;
                setAccount(item, self);
                self.$router.push({path: '/home'});
            }
        },
        created: function () {
            this.logoStyle = 'background:url('+logo+') center 18px no-repeat; background-size:161px; height:100px';
        },
        mounted: function () {
        }
    }
</script>

<style>

</style>
