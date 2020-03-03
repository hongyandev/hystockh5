<template>
    <div>
        <headerNav title="我的供货商"/>
        <van-cell-group>
            <van-cell v-for="item in ascounts" :uid="item.uid" :title="item.company.companyName" @click="selectCompany(item)">
                <van-tag class="company-group-tag" v-show="item.uid==currentUid" plain type="success">当前</van-tag>
                <van-tag class="company-group-tag" v-if="item.isFirst=='1'" plain type="danger">默认</van-tag>
                <van-tag class="company-group-tag" v-else plain type="primary" @click="setDefault(item)">设为默认</van-tag>
            </van-cell>
        </van-cell-group>
        <loading v-show="loadingShow" />
    </div>
</template>

<script>
    import {getAccounts, setDefaultCompany} from '../../../api/my.js'
    import loading from '../../../components/common/loading';
    import {setAccount} from '../../../config/common.js';
    export default {
        components: {
            loading
        },
        data() {
            return {
                ascounts: [],
                currentUid: '',
                loadingShow: true
            }
        },
        methods: {
            selectCompany(item) {
                let self = this;
                setAccount(item);
                let url = self.$route.query.url || '/user/index';
                self.$router.push({path: url});
            },
            setDefault(item) {
                let data = {
                    uid: item.uid
                };
                this.loadingShow = true;
                setDefaultCompany(data).then(response => {
                    this.ascounts = response;
                    this.loadingShow = false;
                })
            }
        },
        created: function () {
            this.currentUid = localStorage.getItem('uid');
            getAccounts().then(response => {
                this.ascounts = response;
                this.loadingShow = false;
            });
        }
    }
</script>

<style>
.company-group-tag {
    margin-left: 10px;
}
</style>
