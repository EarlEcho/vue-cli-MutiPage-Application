<template>
    <div id="app">

        <p>分类页</p>

    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';

    import {Cell, Group, Divider} from 'vux'


    export default {
        data() {
            return {
                webname: 5464,
            }
        },
        components: {
            Cell, Group, Divider
        },
        //实例初始化最之前，无法获取到data里的数据
        beforeCreate() {


        },
        //在挂载开始之前被调用
        beforeMount() {


        },
        //已成功挂载，相当ready()
        mounted() {


        },
        //相关操作事件
        methods: {}
    }
</script>

<style lang="less">


</style>
