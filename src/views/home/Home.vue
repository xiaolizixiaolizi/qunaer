<template>
  <div class="home">
    <v-header></v-header>
    <home-swipre :swiperlist="swiperList"></home-swipre>
    <home-icon :iconlist="iconList"></home-icon>
    <home-recommend :recommendlist="recommendList"></home-recommend>

    <!-- <i class="iconfont icontuxing"></i> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { getHomeInfo } from "network/home";

import VHeader from "./homeComps/Header";
import HomeSwipre from "./homeComps/HomeSwipre";
import HomeIcon from "./homeComps/HomeIcon";
import HomeRecommend from "./homeComps/HomeRecommend";

export default {
  name: "Home",
  components: {
    VHeader,
    HomeSwipre,
    HomeIcon,
    HomeRecommend
  },
  data() {
    return {
      swiperList: [],
      recommendList: [],
      iconList: []
    };
  },
  methods: {
    async _getHomeInfo() {
      let res = await getHomeInfo();
      this.swiperList = res.swiperList;
      this.recommendList = res.recommendList;
      this.iconList = res.iconList;
    }
  },
  created() {
    this._getHomeInfo();
  }
};
</script>

<style lang="stylus" scoped>
// @import '~assets/styles/global.styl';

</style>


