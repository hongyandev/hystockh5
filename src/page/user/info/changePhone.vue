<template>
    <div>
        <headerNav title="修改手机号码"/>
        <van-cell-group>
            <van-field v-model="phone" placeholder="请输入新手机号"/>
            <van-field v-model="verifycode" center clearable placeholder="请输入短信验证码">
                <van-button slot="button" size="small" type="primary" @click="getVerifycode">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <div style="margin: 10px;">
            <van-button size="large" type="primary" @click="changephone" style="height: 45px;line-height:45px;">更换手机号
            </van-button>
        </div>
    </div>
</template>

<script>
    import {Field} from 'vant';
    import {getverifycode} from "../../../api/account";
    import {changePhone} from "../../../api/my";
    export default {
        components: {
            [Field.name]: Field
        },
        data() {
            return {
                phone: '',
                verifycode: '',
            }
        },
        methods: {
            getVerifycode() {
                let phone = this.phone;
                getverifycode(phone).then(response => {
                    if(response){
                        this.verifycode = response;
                    }
                })

            },
            changephone() {
                let data = {
                    username: this.phone,
                    verifycode: this.verifycode
                };
                changePhone(data).then(res => {
                    debugger
                    // this.data = res
                })
            }
        },
        created: function () {


        }
    }
</script>

<style>

</style>
