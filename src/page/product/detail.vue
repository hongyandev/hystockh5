<template>
    <div class="page-view">
        <van-nav-bar class="page-header"
                     title="商品详情"
                     left-arrow
                     @click-left="onBack"
        />
        <div class="page-content">
            <div class="goods">
                <!--<headerNav title="商品详情"/>-->
                <van-swipe v-if="goods.thumb.length > 0" class="goods-swipe" :loop="false">
                    <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                        <img :src="thumb">
                    </van-swipe-item>
                </van-swipe>
                <div v-else :style="'background-color: #ebedf0;width:100%; height:'+contentWidth+'px'"></div>
                <van-cell-group>
                    <van-cell>
                        <span class="goods-price">{{ formatPrice(goods.price) }}</span>
                        <span v-if="goods.market_price > goods.price" class="goods-market-price">{{ formatPrice(goods.market_price) }}</span>
                        <div class="goods-title">{{ goods.title }}</div>
                        <div class="goods-subtit">{{goods.subtitle}}</div>
                    </van-cell>

                    <van-cell v-if="0==1" @click="onClickShowTag" class="goods-tag">
                        <template slot="title" style="font-size:10px;">
                            <img src="https://haitao.nos.netease.com/ba8a4c2fdaa54f82a45261293c116af61419663676663i46n3jlh10028.png"/>
                            <span>挪威品牌</span>
                            <img src="https://haitao.nosdn2.127.net/13bd59e6e29a4f06b278c586629e690d.png"/>
                            <span>跨境商品</span>
                            <van-icon name="passed" color="red"/>
                            <span>次日达</span>
                            <van-icon name="passed" color="red"/>
                            <span>自提</span>
                            <van-icon name="passed" color="red"/>
                            <span>闪电退款</span>
                            <van-icon name="passed" color="red"/>
                            <span>前海保税仓</span>
                            <van-icon name="passed" color="red"/>
                            <span>七天无理由退货（拆封后不支持）</span>
                        </template>
                    </van-cell>
                </van-cell-group>

                <van-cell-group v-if="0==1" class="goods-cell-group">
                    <van-cell is-link @click="showPromotion">
                        <template slot="title">
                            <span style="margin-right: 10px;">领券</span>
                            <van-tag type="danger" mark style="margin-right: 5px;">满180减30</van-tag>
                            <van-tag type="danger" mark style="margin-right: 5px;">满300减100</van-tag>
                        </template>
                    </van-cell>

                    <van-cell is-link @click="showPromotion">
                        <template slot="title">
                            <span style="margin-right: 10px;">促销</span>
                            <van-tag type="danger" style="margin-right: 5px;">多买优惠</van-tag>
                            <van-tag type="danger" style="margin-right: 5px;">满减</van-tag>
                            <van-tag type="danger" style="margin-right: 5px;">限购</van-tag>
                        </template>
                    </van-cell>
                </van-cell-group>

                <van-cell-group v-if="0==1" class="goods-cell-group">
                    <van-cell is-link @click="showSku">
                        <template slot="title">
                            <span style="margin-right: 10px;">已选</span>
                            <span>10件装</span>
                        </template>
                    </van-cell>
                </van-cell-group>
                <div v-if="goods.info!=''" class="goods-info">
                    <p class="goods-info-title">图文详情</p>
                    <div class="goods-info-content" v-html="goods.info"></div>
                </div>
                <van-goods-action>
                    <van-goods-action-mini-btn icon="wap-home" @click="onClickHome">
                        首页
                    </van-goods-action-mini-btn>
                    <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
                        购物车
                    </van-goods-action-mini-btn>
                    <van-goods-action-big-btn @click="showSku">
                        加入购物车
                    </van-goods-action-big-btn>
                    <van-goods-action-big-btn primary @click="showSku">
                        立即购买
                    </van-goods-action-big-btn>
                </van-goods-action>
                <van-actionsheet v-model="show" title="促销" style="font-size:14px;">
                    <van-cell is-link @click="sorry">
                        <template slot="title">
                            <van-tag type="danger">多买优惠</van-tag>
                            <span> 满2件，总价打9折</span>
                        </template>
                    </van-cell>
                    <van-cell is-link @click="sorry">
                        <template slot="title">
                            <van-tag type="danger">满减</van-tag>
                            <span> 满100元减50元</span>
                        </template>
                    </van-cell>
                    <van-cell is-link @click="sorry">
                        <template slot="title">
                            <van-tag type="danger">限购</van-tag>
                            <span> 购买不超过5件时享受单件价￥8.00，超出数量以结算价为准</span>
                        </template>
                    </van-cell>
                </van-actionsheet>

                <van-actionsheet v-model="showTag" title="服务说明" style="font-size:14px;">
                    <van-cell>
                        <template slot="title">
                            <van-icon name="passed" color="red" style="margin-right: 10px;"/>
                            <span>次日达</span>
                            <div style="margin-left: 24px;font-size:10px;color:#7d7d7d;">指定时间前下单，次日送达</div>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template slot="title">
                            <van-icon name="passed" color="red" style="margin-right: 10px;"/>
                            <span>自提</span>
                            <div style="margin-left: 24px;font-size:10px;color:#7d7d7d;">我们提供多种自提服务，包括自提点、自助提货柜、移动自提车等服务</div>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template slot="title">
                            <van-icon name="passed" color="red" style="margin-right: 10px;"/>
                            <span>闪电退款</span>
                            <div style="margin-left: 24px;font-size:10px;color:#7d7d7d;">签收7天内退货的，提供先退款后退货服务。</div>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template slot="title">
                            <van-icon name="passed" color="red" style="margin-right: 10px;"/>
                            <span>七天无理由退货（拆封后不支持）</span>
                            <div style="margin-left: 24px;font-size:10px;color:#7d7d7d;">七天无理由退货（拆封后不支持）</div>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template slot="title">
                            <van-icon name="passed" color="red" style="margin-right: 10px;"/>
                            <span>前海保税仓</span>
                            <div style="margin-left: 24px;font-size:10px;color:#7d7d7d;">本商品由前海保税仓发货</div>
                        </template>
                    </van-cell>
                </van-actionsheet>
                <van-sku
                        v-model="showBase"
                        :sku="skuData.sku"
                        :goods="skuData.goods_info"
                        :goods-id="skuData.goods_info.goods_id"
                        :hide-stock="skuData.sku.hide_stock"
                        :quota="skuData.quota"
                        :quota-used="skuData.quota_used"
                        reset-stepper-on-hide
                        reset-selected-sku-on-hide
                        disable-stepper-input
                        :close-on-click-overlay="closeOnClickOverlay"
                        @buy-clicked="onBuyClicked"
                        @add-cart="onAddCartClicked"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import {getGoodsDetail, getGoodsSku} from "../../api/goods"

    export default {
        name: 'product-detail',
        components: {},
        data() {
            return {
                show: false,
                showTag: false,
                goods: {
                    id: 0,
                    title: '',
                    subtitle: '',
                    price: 0,
                    market_price: 0,
                    express: '',
                    remain: 0,
                    thumb: [],
                    info: '',
                },
                skuData: {
                    quota: 0,
                    quota_used: 0,
                    goods_info: {
                        goods_id: 0,
                        title: '',
                        picture: ''
                    },
                    sku: {
                        tree: [],
                        list: [],
                        price: '0.01',
                        stock_num: 0,
                        collection_id: 0,
                        none_sku: true,
                        messages: [],
                        hide_stock: false
                    }
                },
                contentWidth: document.documentElement.clientWidth / 2,
                showBase: false,
                showCustom: false,
                showStepper: false,
                closeOnClickOverlay: true
            };
        },
        props: {
            productId: Number
        },
        methods: {
            onBack() {
                this.$emit('hidden-event', false);
            },
            onClickHome() {
                this.$router.push('/home');
            },
            formatPrice(price) {
                return '¥' + _.ceil(_.divide(price, 100), 2);
            },
            onClickCart() {
                this.$router.push('/cart');
            },
            sorry() {
                console.log('暂无后续逻辑~');
            },
            showPromotion() {
                this.show = true;
            },
            showSku() {
                this.showBase = true;
                console.log('sku', this.goods.id);
                let salf = this;
                getGoodsSku({
                    goodsId: salf.goods.id
                }).then(res => {
                    console.log(res)
                    _.assignIn(salf.skuData, {
                        goods_info: {
                            goods_id: salf.goods.id,
                            title: salf.goods.name,
                            picture: salf.goods.thumb[0] || ''
                        },
                        sku: res.sku
                    })
                });
            },
            onClickShowTag() {
                this.showTag = true;
            },
            onBuyClicked(data) {
                this.$toast(JSON.stringify(data));
            },
            onAddCartClicked(data) {
                console.log(data);
                this.$toast(JSON.stringify(data));
            },

        },
        mounted: function () {
            let salf = this;
            console.log("detail", salf.productId);
            getGoodsDetail({
                goodsId: salf.productId
            }).then(res => {
                console.log(res)
                _.assignIn(salf.goods, {
                    id: res.id,
                    title: res.name,
                    subtitle: res.specs,
                    price: _.multiply(_.multiply(res.price, _.subtract(1, _.divide(res.discountRate, 100))),100),
                    market_price: _.multiply(res.price, 100),
                    thumb: res.thumb,
                    info: res.detail || '',
                })
            });

        }
    };
</script>

<style lang="less">
    .goods {
        // padding-top: 95px;
        padding-bottom: 50px;
        &-swipe {
            img {
                width: 7.5rem;
                height: 7.5rem;
                display: block;
            }
        }
        &-tag {
            font-size: 12px;
            border-top: 1px solid #e5e5e5;
            span {
                margin-right: 10px;
            }
            i {
                color: red;
                margin-right: 3px;
            }
            img {
                width: 12px;
                margin-right: 3px;
                margin-top: 6px;
            }
        }
        &-title {
            line-height: 18px;
            padding-top: 10px;
            margin-bottom: 6px;
            font-size: 14px;
            color: #333;
            font-weight: 700;
            border-top: 1px solid #f0f0f0;
        }
        &-subtit {
            font-size: 13px;
            color: #333;
            line-height: 21px;
        }
        &-price {
            color: #f44;
            font-size: 20px;
        }
        &-market-price {
            text-decoration: line-through;
            margin-left: 8px;
            font-size: 13px;
            color: #999;
        }
        &-cell-group {
            margin: 15px 0;
            .van-cell__value {
                color: #999;
            }
        }
        &-info-title {
            height: 44px;
            line-height: 44px;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            margin: 10px;
            border-top: 1px solid #e5e5e5;
        }
        &-info-content {
            margin-bottom: 50px;
            padding: 5px;
        }
        &-info p {
            margin: 0;
            padding: 0;
            margin-block-end: 0;
            margin-block-start: 0;
            display: grid;
        }
        &-info img {
            width: 100%;
        }
    }
</style>