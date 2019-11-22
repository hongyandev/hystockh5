<template>
    <div>
        <headerNav title="选择默认经销商"/>
        <van-cell-group>
            <van-cell v-for="item in ascounts" :uid="item.uid" :title="item.company.companyName">
                <van-button plain size="small" type="primary" @click="setdefault(item.uid)">设置默认</van-button>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    import {getAccounts , setDefaultCompany} from '../../../api/page.js'
export default {
    data(){
        return{
            ascounts:[],
            plain:true
        }
    },
    methods:{
        setdefault(val){
            let data={
                uid:val
            };
            setDefaultCompany(data).then(response=>{
                debugger
                console.log(response);

                this.plain = false
            })
        }
    },
    created:function () {
        getAccounts().then(response=>{
            this.ascounts = response;
        });
    }
}
</script>

<style>

</style>
