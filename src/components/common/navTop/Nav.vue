<template>
    <div class="nb">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
    .nb{
        display: flex;
        height: 44px;
        line-height: 44px;/*或者60*/
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,0);
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>