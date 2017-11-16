<template>
    <div id="app">
        <div>
            <divider>vux UI 展示</divider>
            <p>首页</p>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';

    import {Cell, Group, Divider} from 'vux'


    export default {
        data() {
            return {

            }
        },
        components: {
            Divider
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


    .note {
        color: #666;
        padding: 10px;
        font-size: 12px;
    }

    .note p {
        line-height: 25px;
    }

    .weui-cells {
        font-size: 14px !important;
    }

    /*
     * less 展示
     */
    .lessTest {
        .listbox {
            border-radius: 10px;
            font-size: 14px;
        }
        .boxcontent {
            padding: 15px;
        }
    }


</style>
