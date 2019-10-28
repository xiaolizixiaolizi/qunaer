<template>

    <van-swipe :autoplay="3000" indicator-color="$bgColor"  class="home-swipre">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image lazy-load :src="image"  width="100%" height="100%">
          <template v-slot:loading>
            <van-loading type="spinner" size="20"/>
          </template>
        </van-image>
      </van-swipe-item>
    </van-swipe>

</template>

<script>
export default {
  name: "HomeSwipre",
  components: {},
  data() {
    return {
      images: [
        "https://source.qunarzz.com/site/images/wns/20191025_app_750x192_11781.jpg",
        "https://source.qunarzz.com/site/images/wns/20191028_dujia_homepage_750x192_2.jpg",
        "https://source.qunarzz.com/site/images/wns/20190916_qunar_dujia_750x192_3.jpg",
        "https://source.qunarzz.com/site/images/wns/20191014_dujia_homepage_top_banner_4.jpg",
        "https://source.qunarzz.com/site/images/wns/20191017_dujia_homepage_750x192_5.jpg",
      ]
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='stylus' scoped>
.home-swipre {
  height: 25.6vw;
  background: #eee;
}
</style>