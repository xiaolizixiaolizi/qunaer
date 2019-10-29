<template>
  <div class="GoodsDetail">
    <h3>GoodsDetail</h3>
    <h3>{{id}}</h3>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.params.id;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='stylus' scoped>



//@import ; 引入公共css类



</style>