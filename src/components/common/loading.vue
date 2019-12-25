<template>
    <div>
        <van-loading class="loading" style="z-index: 2016"/>
        <div class="van-overlay" style="background-color: rgba(255, 255, 255, 0.5);"></div>
    </div>
</template>

<script>
    import {Loading} from 'vant';
    export default {
        name: "loading",
        components:{
            [Loading.name]:Loading,
        }
    }
</script>

<style>
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>