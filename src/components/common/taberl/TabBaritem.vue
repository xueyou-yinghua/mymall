<template>
    <div id="tab-bar" @click="Click">
        <slot name="item-icon" v-if="!isViable"></slot>
        <slot name="item-icon-active" v-else></slot>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBaritem",
        data(){
            return{

            }
        },
        computed:{
            //判断一下目前是谁
            isViable(){
                /**
                 * this.$route  获取当前活跃路由
                 * 判断是否是当前路由
                 */
                return this.$route.path.includes(this.url)
            },
            activeStyle(){
                return this.isViable?{color:this.colors}:{}
            }
        },
        props:{
            url:{
                type:String,
            },
            colors:{
                type:String,
                default:"red"
            }
        },
        methods:{
            Click(){
                this.$router.replace(this.url)
            }
        }
    }
</script>

<style scoped>
    #tab-bar{
        /*均等分*/
        flex: 1;
        text-align: center;
        /*49px移动端最适合*/
        height: 49px;
    }
    #tab-bar img{
        width: 24px;
        height: 24px;
        font-size: 15px;
        vertical-align: middle;
    }
</style>