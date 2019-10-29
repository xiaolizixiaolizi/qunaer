<template>
  <div class="city-header">
    <div class="city-header-left" @click="goHome">
      <i class="iconfont iconjiantou-copy"></i>
    </div>
    <div class="city-header-main">城市选择</div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  components: {},
  data() {
    return {};
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    goHome() {
      this.$router.push({ name: "home" });
    }
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
// $bgColor = #00bcd4;
.city-header {
  height: 43px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: $bgColor;
  text-align: center;
  color: #fff;

  .city-header-left {
    padding-left: 8px;

  }

  .city-header-main {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
}
</style>