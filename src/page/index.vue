<template>
    <div>
        <page/>
        <navigate :active="0"/>
    </div>
</template>

<script>
import navigate from '../components/footer/navigate.vue'
import page from './page/pageIndex.vue'

export default {
    components:{
        page,
        navigate
    }
}
</script>
<style>

</style>


