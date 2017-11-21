<template>
    <tabbar class="dz-main-switch" v-model="index">
        <tabbar-item link="/views/home/index.html" @on-item-click="tabbarClick">
            <i slot="icon" class="icon iconfont">&#xe621;</i>
            <i slot="icon-active" class="icon iconfont">&#xe621;</i>
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/views/home/index.html" @on-item-click="tabbarClick">
            <i slot="icon" class="icon iconfont">&#xe620;</i>
            <i slot="icon-active" class="icon iconfont">&#xe620;</i>
            <span slot="label">类别</span>
        </tabbar-item>
        <tabbar-item link="/views/home/index.html" @on-item-click="tabbarClick">
            <i slot="icon" class="icon iconfont">&#xe6d2;</i>
            <i slot="icon-active" class="icon iconfont">&#xe6d2;</i>
            <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="/views/home/index.html" @on-item-click="tabbarClick">
            <i slot="icon" class="icon iconfont">&#xe625;</i>
            <i slot="icon-active" class="icon iconfont">&#xe624;</i>
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vux'

    export default {
        components: {
            Tabbar, TabbarItem
        },
        name: 'dz-main-switch',
        data() {
            return {
                index: 0
            }
        },
        props: ['tabbarIndex'],
        created: function () {
            this.index = parseInt(this.tabbarIndex);
        },
        methods: {
            tabbarClick: function () {
                this.index = parseInt(this.tabbarIndex);
            }
        }
    }
</script>

<style lang="less">
    .dz-main-switch {
        position: fixed !important;
    }
</style>
