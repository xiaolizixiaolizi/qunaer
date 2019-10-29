<template>
  <div class="city">
    <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from "./cityComps/CityHeader";
export default {
  name: "City",
  components: {
    CityHeader
  },
  data() {
    return {};
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







//@import ; 引入公共css类







</style>