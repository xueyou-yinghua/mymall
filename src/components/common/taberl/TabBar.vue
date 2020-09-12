<template>
    <div id="TabBar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #TabBar{
        display: flex;
        background-color: darkgrey;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -10px 10px rgba(100,100,100,.1);
    }
</style>