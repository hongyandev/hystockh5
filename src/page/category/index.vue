<template>
    <div>
        <van-search
                v-model="value"
                placeholder="请输入商品关键词"
                show-action
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <van-badge-group :active-key="activeKey" class="tab" :style="'height:'+fullHeight+'px'">
            <van-badge v-for="item in categoryBadge" :title="item.name" @click="onClick"></van-badge>
        </van-badge-group>
        <div class="content" :style="'width:'+fullWidth+'px;height:'+(fullHeight-7)+'px'">
            <div v-if="categoryData.length > 0" class="category-div">
                <ul>
                    <category-li v-for="item in categoryData" :item="item"></category-li>
                    <div style="clear:both"></div>
                </ul>
            </div>
        </div>
        <navigate :active="2"/>
    </div>
</template>

<script>
    import {Search} from "vant";
    import { getCategory } from "../../api/category";
    import CategoryLi from "../../components/common/categoryli";
    export default {
        name: "userindex",
        components: {
            CategoryLi,
            [Search.name]: Search,
        },
        data() {
            return {
                value: "",
                categoryId: "",
                activeKey: 0,
                fullHeight: document.documentElement.clientHeight - 93,
                fullWidth: document.documentElement.clientWidth - 99,
                categoryBadge: [],
                categoryData: [],
            };
        },
        methods: {
            onSearch() {
                console.log(this.value);
            },
            onClick(key) {
                let self = this;
                self.activeKey = key;
                if (self.categoryBadge.length > 0) {
                    let item = self.categoryBadge[key];
                    let data = {
                        categoryId: item.id
                    }
                    getCategory(data).then(res=>{
                        if (res && res.length > 0) {
                            self.categoryData = res;
                        } else {
                            self.categoryData = [item];
                        }
                    })
                }
            }
        },
        created: function () {
            let self = this;
            let data = {
                categoryId: self.activeKey
            };
            getCategory(data).then(res=>{
                self.categoryBadge = res;
                self.onClick(self.activeKey);
            });
        }
    };
</script>

<style lang="less">
    .tab {
        float: left;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        min-height: 100%;
        .van-badge {
            padding: 15px 12px 15px 9px;
        }
        .van-badge:not(:last-child)::after {
            height: 199%;
        }
        .van-badge__text {
            width: 60px;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
        }
    }

    .content {
        float: left;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        min-height: 100%;
        margin: 7px 7px 0;
        font-size: 12px;
        img {
            width: 100%;
        }
        .category-div {
            margin: 19px 0px 0;
            h4 {
                font-size: 14px;
                color: #333;
            }
            ul {
                margin-top: 10px;
            }
            li {
                width: 32.8%;
                float: left;
                text-align: center;
                img {
                    width: 60px;
                    height: 60px;
                }
                span {
                    font-size: 12px;
                    height: 36px;
                    color: #686868;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: box;
                    display: -webkit-box;
                    display: -moz-box;
                    display: -ms-box;
                    display: -o-box;
                    line-clamp: 2;
                    -webkit-line-clamp: 2;
                    -moz-line-clamp: 2;
                    -ms-line-clamp: 2;
                    -o-line-clamp: 2;
                    box-orient: vertical;
                    -webkit-box-orient: vertical;
                    -ms-box-orient: vertical;
                    -o-box-orient: vertical;
                    word-break: break-all;
                    box-align: center;
                    -webkit-box-align: center;
                    -moz-box-align: center;
                    -ms-box-align: center;
                    -o-box-align: center;
                    box-pack: center;
                    -webkit-box-pack: center;
                    -moz-box-pack: center;
                    -ms-box-pack: center;
                    -o-box-pack: center;
                    z-index: 2;
                    position: relative;
                }
            }
            .van-card {
                padding: 5px;
            }
        }
    }
</style>
