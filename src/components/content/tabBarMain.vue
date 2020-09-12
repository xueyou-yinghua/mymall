<template>
    <div id="main">
        <TabBar>
            <tab-baritem v-for="(index,key) in listView" :url="index.path">
                <img :src=index.img slot="item-icon">
                <img :src=index.imging slot="item-icon-active">
                <div slot="item-text">{{index.text}}</div>
            </tab-baritem>
        </TabBar>
    </div>
</template>

<script>
    import TabBar from "../../components/common/taberl/TabBar";
    import TabBaritem from "../../components/common/taberl/TabBaritem";

    export default {
        name: "mains",
        components: {TabBaritem, TabBar},
        data(){
            return{
                listView:[
                    {
                        img:require('../../assets/img/TabBar/首页.png'),
                        imging:require('../../assets/img/TabBar/首页ing.png'),
                        text:'首页',
                        path:'/home'
                    },
                    {
                        img:require("../../assets/img/TabBar/分类.png"),
                        imging:require("../../assets/img/TabBar/分类ing.png"),
                        text:'分类',
                        path:'/classify'
                    },
                    {
                        img:require('../../assets/img/TabBar/购物车.png'),
                        imging:require('../../assets/img/TabBar/购物车ing.png'),
                        text:'购物车',
                        path:'/shopping'
                    },
                    {
                        img:require('../../assets/img/TabBar/我的.png'),
                        imging:require('../../assets/img/TabBar/我的ing.png'),
                        text:'我的',
                        path:'/mine'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>