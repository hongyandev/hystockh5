<template>
    <div>
        <div class="page-view">
            <div class="page-header">
                <van-search
                        v-model="value"
                        placeholder="请输入商品关键词"
                        show-action
                        @search="onSearch"
                >
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </div>
            <van-list class="page-content product-list" v-model="loading" :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoad">
                <product-card v-for="(product,i) in list" :key="i" :product='product' @click="showProduct(product)"/>
            </van-list>
            <navigate :active="1"/>
        </div>
        <div v-if="show" style="z-index: 2001;position: fixed;width: 100%;height: 100%;background-color: white">
            <product-detail :product-id="productId" @hidden-event="onShow"></product-detail>
        </div>
    </div>

</template>

<script>
    import _ from 'lodash';
    import {Search} from 'vant';
    import ProductDetail from "./detail";

    export default {
        components: {
            ProductDetail,
            [Search.name]: Search,
        },
        data() {
            return {
                value: "",
                categoryId: "",
                loading: false,
                finished: false,
                list: [],
                show: false,
                productId: 0,
                products: [
                    {
                        id: 1,
                        imageURL: 'https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712',
                        title: 'BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套',
                        price: '13.00',
                    },
                    {
                        id: 1,
                        imageURL: 'https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712',
                        title: 'BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套',
                        price: '499.00',
                        tags: ['满199减100', '2件起购'],
                    },
                    {
                        id: 1,
                        imageURL: 'https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712',
                        title: 'BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套',
                        price: '499.00',
                        tags: ['新品'],
                        imageTag: '仅剩1件',
                    },
                    {
                        id: 1,
                        imageURL: 'https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712',
                        title: 'BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套',
                        price: '499.00',
                        tags: ['赠'],
                        imageTag: '预约',
                    },
                    {
                        id: 1,
                        imageURL: 'https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712',
                        title: 'BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套',
                        price: '15.00',
                    },
                    {
                        id: 1,
                        imageURL: 'https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712',
                        title: 'BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套',
                        price: '125.50',
                    }
                ]
            };
        },
        methods: {
            onShow(sign) {
                this.show = sign;
            },
            showProduct(product) {
                this.show = true;
                // this.$router.push('/product/' + product.id);
            },
            onLoad() {
                console.log(this.value);
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        let item = _.clone(_.sample(this.products));
                        this.list.push(item);
                    }
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
            onSearch() {
                this.list = [];
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

    }
</style>