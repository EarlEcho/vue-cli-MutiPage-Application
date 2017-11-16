<template>
    <div class="mainWarp">
        <hb-head headfont="首页"></hb-head>
        <div>
            <swiper :list="homeImgSwiper" v-model="swiperIndex"></swiper>
            <!--<img src="./assets/43.jpeg" alt=""/>-->
        </div>


    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';

    import HbHead from 'components/HbHead';
    import {Swiper} from 'vux'

    import Banner1 from './assets/43.jpeg';
    import Banner2 from './assets/33.jpeg';
    import Banner3 from './assets/111.jpeg';

    export default {

        components: {
            HbHead, Swiper
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
        },
        mounted: function () {
            console.log(this.homeImgSwiper)

        }
    }
</script>

<style lang="less">

    img {
        max-width: 100%;
    }

</style>
