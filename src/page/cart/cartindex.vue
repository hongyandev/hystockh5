<template>
    <div class="card">
        <headerNav title="购物车"/>
        <van-cell @click="editGoods" value="编辑商品" class="head">
            <template slot="title">
                <van-checkbox v-model="checkedAll">全选</van-checkbox>
            </template>
        </van-cell>
        <van-checkbox-group class="card-goods" v-model="checkedGoods">
            <div class="promotion-group">
                <div v-for="(item,index) in goods" :key="index" class="card-goods__item">
                    <van-swipe-cell :right-width="65" :on-close="onClose">
                        <!--<van-checkbox  @click="checkedFun(item.id)" v-model="checked" :name="item.id"></van-checkbox>-->
                        <cart ref="cart" :product='item' :iscard='true' @valuechange="valuechange"></cart>
                        <template slot="right">
                            <van-button square type="danger" text="删除"/>
                        </template>
                    </van-swipe-cell>
                </div>
            </div>
        </van-checkbox-group>

        <div style="height:50px;"></div>
        <span style="font-size:12px;">total:{{totalArr}}</span>
        <van-submit-bar :price="total" :disabled="!checkedGoods.length" :button-text="submitBarText"
                        @submit="onSubmit">
            <template slot>
                <van-checkbox v-model="checkedAll">全选</van-checkbox>
            </template>

        </van-submit-bar>
    </div>
</template>

<script>
import cart from '../../components/common/cart';
import {SwipeCell, Button , Dialog }  from 'vant';
export default {
  components: {
      cart,
      [SwipeCell.name]:SwipeCell,
      [Button.name]:Button,
      [Dialog.name]:Dialog
  },
  data() {
    return {
      checkedAll:true,
      bartext:['结算','删除'],
      checkedGoods: ['1', '2', '3'],
      checked:false,
      totalArr: [],
      goods: [
          {
        id: '1',
        title: '星巴克(Starbucks)星冰乐 轻盈香草味 咖啡饮料 281ml*6瓶礼盒装低脂减糖',
        desc: '3.18kg/件',
        price: '200.00',
        quantity: 1,
      },
          {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: '690.00',
        quantity: 1,
      },
          {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: '2680.00',
        quantity: 1,
      }
      ],
      editor: false,
      carts: [],
      total: 0
    };
  },
  computed: {
    submitBarText() {
        const count = this.checkedGoods.length;
        if (this.editor){
            return '删除' + (count ? `(${count})` : '');
        }else{
            return '结算' + (count ? `(${count})` : '');
        }

    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? parseFloat(item.price): 0), 0);
    },
  },
  methods: {
      onClose(clickPosition, instance) {
          switch (clickPosition) {
              case 'left':
              case 'cell':
              case 'outside':
                  instance.close();
                  break;
              case 'right':
                  debugger
                  Dialog.confirm({
                      message: '你确定要删除吗?'
                  }).then(() => {
                      instance.close();
                  });
                  break;
          }
      },
      editGoods(){
        this.editor = !this.editor;
      },
      checkedFun(val){
          debugger
          console.info(val)
      },
      onSubmit() {
          this.$router.push('/order')
       },
      valuechange: function () {
          // console.log(product)
          // this.totalArr.push(product)
          var total = 0, product;
          for (var i = 0; i<this.$refs['cart'].length; i++){
             product = this.$refs['cart'][i].product;
             total += product.price * product.quantity;
          }
          this.total = total;
      }
  }
};
</script>

<style lang="less">
.card-goods {
  font-size: 12px;
  &__item {
    position: relative;
    .van-checkbox{
      width: 20px;
      height: 20px;
      top: 40px;
      left: 5px;
      z-index: 1;
      position: absolute;
    }
    .additional{
      width: 100%;
        padding-left: 15px;
    box-sizing: border-box;
    }
  }
}
.head{
      padding-left: 5px;
  border-bottom: 1px solid #eee;
}
.card{
  background: #f7f7f7;
  .van-submit-bar__bar {
      border-top: 1px solid #f7f7f7;
      .van-checkbox{
        padding-left: 5px;
      }
  }
  .promotion{
      .van-tag {
          line-height: 12px;
          margin-right: 5px;
      }
      .van-cell__title{

      flex: 4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      }
    }
    .promotion-group{
      margin-top: 10px;
      box-shadow: 5px 5px 5px #e5e5e5;
    }
}

.van-swipe-cell__left,
.van-swipe-cell__right {
    /*display: inline-block;*/
    display: -webkit-flex;
    display: flex;
    align-items: center;
    width: 65px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    background-color: #f44;
}

</style>