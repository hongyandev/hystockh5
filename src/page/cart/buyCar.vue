<template>
    <div>
        <div class="cart cart-main">
            <headerNav title="购物车" :rightTitle="this.editor ? '完成' : '管理'" @rightbtn="rightClick"/>
            <div class="st-spacing-main" v-for="(item) in cartInfoList" :key="item.id">
                <div class="st-item product-item">
                    <div class="st-border-bottom store-title">
                        <!--<p class="theme-checkbox" @click="checkShop(item)">
                            <van-checkbox v-model="item.checked">
                              <span>
                                  {{item.shopTitle}}
                                  <van-icon name="arrow"/>
                              </span>
                            </van-checkbox>
                        </p>-->
                    </div>
                    <ul class="commodity-list item-list" v-for="(pros,value) in item.productList" :key="value">
                        <li class="theme-checkbox" @click="ischeck(item,pros)">
                            <van-checkbox  v-model="pros.isChecked"></van-checkbox>
                        </li>
                        <li>
                            <van-swipe-cell :right-width="65" :on-close="onClose">
                                <cart :product='pros' :iscard='true'></cart>
                                <template slot="right">
                                    <van-button square type="danger" text="删除"/>
                                </template>
                            </van-swipe-cell>
                        </li>
                    </ul>
                </div>
            </div>
            <van-submit-bar v-if="!this.editor" class="settlement" :price="allPrice*100" :disabled="!allCount" :button-text="submitBarText" @submit="onSubmit">
                <van-checkbox class="theme-checkbox" v-model="isCheckAll" @click="checkAll()">全选</van-checkbox>
            </van-submit-bar>
            <van-submit-bar v-else class="settlement" :button-text="submitBarText" @submit="onDelete">
                <van-checkbox class="theme-checkbox" v-model="isCheckAll" @click="checkAll(allCount)">全选</van-checkbox>
            </van-submit-bar>
        </div>
        <navigate :active="3"/>
    </div>
</template>

<script>
    import cart from '../../components/common/cart';
    import {SwipeCell, Button , Dialog }  from 'vant';
    export default {
        components:{
            [SwipeCell.name]:SwipeCell,
            [Button.name]:Button,
            [Dialog.name]:Dialog,
            cart
        },
        data () {
            return {
                rightText:'管理',
                cartInfoList: [
                    {
                        id: 1,
                        shopTitle: 'xxx旗舰店', // 商店名
                        checked: false, // 商店选择的状态
                        checkedCount: 0, // 此商店被选择的商品数量
                        productList: [
                            {
                                isChecked: false, // 商品选择状态
                                title: '星巴克(Starbucks)星冰乐 轻盈香草味 咖啡饮料 281ml*6瓶礼盒装低脂减糖',
                                desc: '3.18kg/件',
                                price: '200.00',
                                count: 1,
                            }
                        ]
                    },
                    {
                        id: 2,
                        shopTitle: 'xxx旗舰店',
                        checked: false,
                        checkedCount: 0,
                        productList: [
                            {
                                isChecked: false,
                                title: '陕西蜜梨',
                                desc: '约600g',
                                price: '690.00',
                                count: 1,
                            },
                            {
                                isChecked: false,
                                title: '美国伽力果',
                                desc: '约680g/3个',
                                price: '2680.00',
                                count: 1,
                            }
                        ]
                    }
                ],
                editor: false,
                isCheckAll: false, // 是否全选
                allPrice: 0, // 所有价格
                allShops: 0, // 被选中的商店数量
                allCount: 0 // 被选中的产品数量
            }
        },
        methods: {
            // 选中单个商品
            ischeck (item, pro) {
                // 为未选中的时候改变为false，反之为true
                !pro.isChecked ? this._checkTrue(item, pro) : this._checkFalse(item, pro)
            },
            // 修改单个商品的true
            _checkTrue (item, pro) {
                pro.isChecked = true; // 将商品选中状态改为true
                // 这里执行了两部，选中商品数量先+1，再与该店铺商品数量比较，如果相等就更改店铺选中状态为true
                if (++item.checkedCount === item.productList.length) {
                    item.checked = true
                } else {
                    return ''
                }
                // ++item.checkedCount === item.productList.length ? item.checked = true : ''
                // 如果店铺选中状态改为true，选中店铺数量先+1，再与店铺数量比较，如果相等就更改全选选中状态为true
                // // 当商店全选状态，每全选一个商店，被选中商店数加一，数值等于所有商店数，全选状态为true
                if (item.checked) {
                    if (++this.allShops === this.cartInfoList.length) {
                        this.isCheckAll = true
                    } else {
                        this.isCheckAll = false
                    }
                } else {
                    return ''
                }
                // item.checked ? ++this.allShops === this.cartInfoList.length ? this.isCheckAll = true : this.isCheckAll = false : ''
            },
            // 修改单个商品的 false
            _checkFalse (item, pro) {
                pro.isChecked = false; // 将商品选中状态改为false
                --item.checkedCount;// 被选中的商品数减一
                if (item.checked) {
                    // 如果店铺是被选中的，更改店铺选中状态
                    item.checked = false; // 当商店状态为选中时改变false
                    --this.allShops // 商店数减一
                }
                this.isCheckAll = false // 全选状态为false
            },
            // 遍历商店每个商品,状态为false的改变为true,又在_checkTrue()方法中将商店状态改为true
            _shopTrue (item) {
                item.productList.forEach(pro => {
                    if (pro.isChecked === false) {
                        this._checkTrue(item, pro)
                    } else {
                        return ''
                    }
                    // pro.isChecked === false ? this._checkTrue(item, pro) : ''
                })
            },
            _shopFalse (item) {
                item.productList.forEach(pro => {
                    // 同上
                    if (pro.isChecked === true) {
                        this._checkFalse(item, pro)
                    } else {
                        return ''
                    }
                    //  pro.isChecked === true ? this._checkFalse(item, pro) : ''
                })
            },
            // 选择全部商店的商品，已经计算总价和总数量的函数
            checkAll () {
                // 方法内调用方法
                this.isCheckAll = !this.isCheckAll;
                this.isCheckAll
                    ? this.cartInfoList.forEach(item => {
                        this._shopTrue(item)
                    })
                    : this.cartInfoList.forEach(item => {
                        this._shopFalse(item)
                    })
            },
            _totalPeice () {
                // 每次调用此方法，将初始值为0，遍历价格并累加
                this.allPrice = 0;
                this.cartInfoList.forEach(item => {
                    let products = item.productList;
                    products.forEach(pros => {
                        if (pros.isChecked) {
                            this.allPrice += Number(pros.price) * pros.count
                        }
                    })
                })
            },
            _totalCount () {
                // 同上
                this.allCount = 0;
                this.cartInfoList.forEach(item => {
                    this.allCount += item.checkedCount
                })
            },
            onClose(clickPosition, instance) {
                switch (clickPosition) {
                    case 'left':
                    case 'cell':
                    case 'outside':
                        instance.close();
                        break;
                    case 'right':
                        Dialog.confirm({
                            message: '你确定要删除吗?'
                        }).then(() => {
                            instance.close();
                        }).catch(() => {
                            instance.close();
                        });
                        break;
                }
            },
            onSubmit () {
                this.$router.push('/order')
            },
            onDelete(){
                if(this.allCount <= 0){
                    this.$toast("请选择要删除的商品对象")
                }else{
                    Dialog.confirm({
                        message: '你确定要删除吗?'
                    }).then(() => {

                    }).catch(() => {

                    });
                }
            },
            rightClick(){
                //console.info("1")
                this.editor = !this.editor;
            }
        },
        computed:{
            submitBarText() {
                const count = this.allCount;
                if (this.editor){
                    return '删除' + (count ? `(${count})` : '');
                }else{
                    return '结算' + (count ? `(${count})` : '');
                }

            },
        },
        watch: {
            // 深度监听所有数据，每次改变重新计算总价和总数
            cartInfoList: {
                deep: true,
                handler (val, oldval) {
                    this._totalPeice();
                    this._totalCount()
                }
            }
        }
    }
</script>

<style lang="less">
    @spacing-size: 14px;
    .cart-main {
        .st-item{
            margin-top:15px;
        }
        .st-item-header {
            padding: @spacing-size;
            justify-content: flex-start;
            .theme-checkbox {
                margin-right: @spacing-size;
                .van-checkbox__icon{
                    max-height:20px;
                }
            }
        }
        .item-list {
            padding-left: .77rem;
            position: relative;
            .theme-checkbox {
                margin-top: -50px;
                position: absolute;
                left: 15px;
                top: 50%;
            }
        }
    }
    .van-checkbox__label{
        font-size:14px;
    }
    .settlement{
        bottom: 50px;
        .theme-checkbox{
            margin-left:15px;
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