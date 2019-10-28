<template>
  <div class="home">
    <v-header></v-header>
    <home-swipre></home-swipre>
    <home-icon></home-icon>
    <home-recommend></home-recommend>

    <!-- <i class="iconfont icontuxing"></i> -->
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from "./homeComps/Header";
import HomeSwipre from "./homeComps/HomeSwipre";
import HomeIcon from "./homeComps/HomeIcon";
import HomeRecommend from "./homeComps/HomeRecommend";
export default {
  name: "home",
  components: {
    VHeader,
    HomeSwipre,
    HomeIcon,
    HomeRecommend
  }
};
</script>
<style lang="stylus" scoped>
// @import '~assets/styles/global.styl';


</style>

