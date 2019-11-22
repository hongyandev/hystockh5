<template>
    <div>
        <indexNav :title="title"></indexNav>
        <searchIndex></searchIndex>
        <tabbar></tabbar>
    </div>
</template>
<script>
import "../../assets/style/index.css";
import IndexNav from "../../components/header/navIndex";
import searchIndex from "../../components/search/searchIndex";
import tabbar from "../../components/tabbar/tabbar";
export default {
    name:"page",
    components:{
        IndexNav,
        searchIndex,
        tabbar
    },
    data:function(){
        return{
            topheight:0,
            page:{},
            title:'经销商名称'
        }
    },
    created:function(){
        /*GetPage().then(response=>{
            this.page=response;
        });*/
        //debugger
        this.title = this.$route.query.jsxid;
        console.info(this.$route.query.jsxid)
    },
    methods:{

    }
}
</script>
