<style lang="less">
    .mainWarp {
        padding-bottom: 60px;
    }

    .product-list {
        border: solid 1px;
        margin: 10px 5px;
        .weui-grid {
            padding: 5px;
        }
    }

    .product-list-img {
        border: solid 1px red;
        img {
            max-width: 100%;
        }
    }

    .product-infos {
        border: solid 1px;
        /*height: 40px;*/
        .product-title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: 13px;
        }
    }
</style>
<template>
    <div class="mainWarp">
        <hb-head headfont="首页"></hb-head>
        <div class="home-swiper">
            <swiper :list="homeImgSwiper" v-model="swiperIndex" :interval="2000" :auto="true"></swiper>
        </div>
        <div class="product-list">
            <grid :cols="2">
                <grid-item v-for="i in 11">
                    <div class="product-list-img">
                        <img src="./assets/787.jpeg" alt="">
                    </div>
                    <div class="product-infos">
                        <p class="product-title">商品标题:西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜西瓜</p>
                        <p class="product-price">
                            <i class="icon iconfont icon-qian"></i>
                        </p>
                    </div>
                </grid-item>
            </grid>
        </div>
        <dz-main-switch></dz-main-switch>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';

    import HbHead from 'components/HbHead'
    import DzMainSwitch from 'components/MainSwitch';
    import {Swiper, Grid, GridItem} from 'vux'

    import Banner1 from './assets/43.jpeg';
    import Banner2 from './assets/33.jpeg';
    import Banner3 from './assets/111.jpeg';

    export default {

        components: {
            HbHead, Swiper, DzMainSwitch, Grid, GridItem
        },
        data() {
            return {
                homeImgSwiper: [{
                    url: 'javascript:',
                    img: Banner1,
                    title: 'banner1'
                }, {
                    url: 'javascript:',
                    img: Banner2,
                    title: 'banner2'
                }, {
                    url: 'javascript:',
                    img: Banner3,
                    title: 'banner3'
                }],
                swiperIndex: 0
            }
        }
        ,
        mounted: function () {

        }
    }
</script>

