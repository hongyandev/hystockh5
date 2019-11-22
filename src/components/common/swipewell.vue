<template>
    <van-swipe-cell :on-close="onClose">
        <template slot="left">
            <van-button square type="primary" text="选择" />
        </template>

        <van-cell :border="false" title="单元格" value="内容" />

        <template slot="right">
            <van-button square type="danger" text="删除" />
            <van-button square type="primary" text="收藏"/>
        </template>
    </van-swipe-cell>
</template>

<script>
import { SwipeCell } from 'vant';
export default {
    name:'',
    components:{
        [SwipeCell.name]:SwipeCell
    },
    methods:{
        onClose(clickPosition, instance) {
            switch (clickPosition) {
                case 'left':
                case 'cell':
                case 'outside':
                    instance.close();
                    break;
                case 'right':
                    Dialog.confirm({
                        message: '确定删除吗？'
                    }).then(() => {
                        instance.close();
                    });
                    break;
            }
        },
    }
}
</script>

<style lang="less">

</style>
