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

    export default {

        components: {
            HbHead, Swiper
        },
        data() {
            return {
                homeImgSwiper: [{
                    url: 'javascript:',
                    img: '/static/assets/43.jpeg',
                    title: '送你一朵fua'
                }, {
                    url: 'javascript:',
                    img: '/static/assets/33.jpeg',
                    title: '送你一辆车'
                }, {
                    url: 'javascript:',
                    img: '/static/assets/111.jpeg',
                    title: '送你一次旅行'
                }],
                swiperIndex: 1
            }
        },
        methods: {}
    }
</script>

<style lang="less">

    img {
        max-width: 100%;
    }

</style>
