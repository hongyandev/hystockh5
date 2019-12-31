<template>
    <li>
        <router-link :to="{path:'/search',query:{category:item.id}}">
            <img v-if="item.imageurl!==''" :src="item.imageurl">
            <img v-else :src="emptyImg"/>
            <span>{{item.name}}</span>
        </router-link>
    </li>
</template>

<script>
    const emptyImg = require('../../assets/images/box-color.png');
    export default {
        name: "category-li",
        data(){
            return {
                emptyImg: emptyImg
            }
        },
        props: {
            item: {
                type: Object,
                default: function () {
                    return {
                        name: '',
                        imageurl: '',
                        pid: 0,
                        id: 0
                    }
                }
            }
        }
    }
</script>

<style>

</style>