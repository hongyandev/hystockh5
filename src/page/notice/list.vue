<template>
    <div class="jxs-list">
        <headerNav title="消息列表"/>
       <ul>
           <li @click="clicknotice(123)">消息列表123</li>
       </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
      clicknotice(id){
          debugger
          this.$router.push({path:'/home/'+id})
      }
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
