<template>
    <div>
        <div class="page-view">
            <div class="page-header">
                <van-search
                        v-model="query"
                        placeholder="请输入商品关键词"
                        show-action
                        @search="onSearch"
                >
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </div>
            <van-list class="page-content product-list" v-model="loading" :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoad" :style="'height:'+contentHeight+'px'">
                <product-card v-for="(product,i) in list" :key="i" :product='product' @click="showProduct(product)"/>
            </van-list>
            <navigate :active="1"/>
        </div>
        <div v-if="show" class="product-detail">
            <product-detail :product-id="productId" @hidden-event="onShow"></product-detail>
        </div>
    </div>

</template>

<script>
    import _ from 'lodash';
    import {Search} from 'vant';
    import ProductDetail from "./detail";
    import {getGoodsList} from "../../api/goods"

    export default {
        components: {
            ProductDetail,
            [Search.name]: Search,
        },
        data() {
            return {
                query: "",
                categoryId: "",
                current: 1,
                size: 10,
                loading: false,
                finished: false,
                list: [],
                show: false,
                productId: 0,
                contentHeight: document.documentElement.clientHeight - 104
            };
        },
        methods: {
            onShow(sign) {
                this.show = sign;
            },
            showProduct(product) {
                this.productId = product.id
                this.show = true;
                // this.$router.push('/product/' + product.id);
            },
            onLoad() {
                let self = this;
                getGoodsList({
                    current: self.current,
                    size: self.size,
                    query: self.query,
                    categoryId: self.categoryId
                }).then(res => {
                    if (res.pages > 0) {
                        _.forEach(res.records, function (item, index) {
                            self.list.push({
                                id: item.id,
                                imageURL: item.thumb,
                                title: item.name,
                                desc: item.specs,
                                price: item.price
                            });
                        })
                        // 加载状态结束
                        self.loading = false;
                        // 数据全部加载完成
                        if (self.current === res.pages) {
                            self.finished = true;
                        } else {
                            self.current ++;
                        }
                    } else {
                        self.loading = false;
                        self.finished = true;
                    }
                });
            },
            onSearch() {
                this.list = [];
                this.current = 1;
                this.onLoad();
            }
        }
    };
</script>

<style lang="less">
    @import "../../assets/style/pageview.css";
    .product-list {
        .additional .price {
            position: absolute;
            bottom: 6px;
            height: 34px;
        }
    }
    .product-detail {
        z-index: 2001;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: white
    }
</style>