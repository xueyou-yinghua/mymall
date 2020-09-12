<template>
    <div id="home">
        <nav-bar class="top"><div slot="center">购物街</div></nav-bar>
    </div>
</template>

<script>
    import {home} from "../../../network/home";
    import NavBar from "../../common/navTop/Nav";
    export default {
        name: "home",
        components: {NavBar},
        data(){
            return{
                listView:{}
            }
        },
        methods:{

        },
        created() {
            home().then(res=>this.listView=res)
        }
    }
</script>

<style scoped>
    .top{
        color: white;
        background-color: var(--color-tint);
    }
</style>