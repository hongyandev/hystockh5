<template>
    <van-cell-group class="additional">
        <van-card
        :title="product.title"
        :desc="product.desc"
        :num="(iscard?null:product.count)"
        style="background:#fff"
        >
            <template slot="tags">
                <p class="price" v-if="product.price!=null&&product.price!=''" >
                    ￥<span>{{product.price}}</span>
                    <van-stepper v-if="iscard" v-model="product.count" :max="product.max"  :min="product.min" />
                </p>

            </template>
        </van-card>
        <slot />
        <!--<span>total:{{total}}</span>-->
    </van-cell-group>
</template>

<script>
export default {
    name:'cart',
    data:function () {
        return{
            checked:false
        }
    },
    props:{
        product:Object,
        iscard: {
            type: Boolean,
            default: false
        },
    },
    computed:{
        total(){
            this.$emit('valchange', this.product)
          return  this.product.price * this.product.count
        }
    },
    watch: {
        'product.quantity': function (val, oldVal) {
            this.$emit('valuechange', this.product)
        }
    }
}
</script>

<style lang="less">
/*.additional {
    .van-cell {
        padding: 0 15px;
        font-size: 12px;
    }
    .van-cell:not(:last-child)::after{
        border:0;
    }
    .van-card__title{
        font-size: 14px;
    }
    .van-cell__title {
        flex: 10;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .van-tag {
        line-height: 12px;
        margin-right: 5px;
    }
    .price {
      color: #e93b3d;
      font-size: 10px;
        overflow: hidden;
        height: 18px;
      span {
        font-size: 16px;
            margin-right: 5px;
      }
      .van-tag{
        font-size: 12px;
      }
    }
    .van-stepper{
        position: absolute;
        bottom: 5px;
        right: 5px;
        &__plus{
            width: 30px;
        }
        &__minus{
            width: 30px;
        }
    }
    .image_tag{
        position: absolute;
        bottom: 0;
        width: 90px;
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        color: #fff;
        text-align: center;
        background-color: rgba(0,0,0,.7);
    }
}
.additional::after{
    border-color: #f7f7f7;

}*/
</style>
