<template>
    <div class="jxs-list">
        <headerNav title="经销商列表"/>
       <ul v-for="item in jxsData">
           <li @click="clickjxs(item)">{{item.company.companyName}}</li>
       </ul>
    </div>
</template>

<script>
    import {getAccounts} from "../../api/my";
export default {
  data() {
    return {
        jxsData:[]
    };
  },
  methods: {
      clickjxs(item){
          var jxsid = item.uid;
          this.$router.push({path:'/home',query:{jsxid:item.company.companyName}})
      }
  },
  created:function () {
        getAccounts().then(res=>{
            let self = this;
            console.log(res);
            self.jxsData = res
        })
    }
};
</script>

<style lang="less">
    .jxs-list{
        ul{
            li{
                padding:15px 15px;
                font-size:14px;
                border-bottom:1px solid #e5e5e5;
            }
        }
    }
</style>
