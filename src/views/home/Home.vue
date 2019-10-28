<template>
  <div class="home">
    <v-header></v-header>
    <home-swipre></home-swipre>

    <!-- <i class="iconfont icontuxing"></i> -->
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from "./homeComps/Header";
import HomeSwipre from "./homeComps/HomeSwipre";
export default {
  name: "home",
  components: {
    VHeader,
    HomeSwipre
  }
};
</script>
<style lang="stylus" scoped>
// @import '~assets/styles/global.styl';


</style>

