<template>
  <div id="app">
    <router-view></router-view>
    <mains></mains>
  </div>
</template>

<style>
  @import "assets/css/base.css";
</style>
<script>
  import Mains from "./components/content/tabBarMain";
  export default {
    components: {Mains}
  }
</script>