<template>
  <div class="zi-mu">
    <ul class="zimu-list">
     <li v-for="(item, index) in ziMu" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ZiMu",
  components: {},
  data() {
    return {
      ziMu: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
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
// @import ; 引入公共css类
.zi-mu {
  position: fixed;
  right: 0;
  // bottom: 0;
  top: 150px;
  // background: red;
  width: 20px;

  .zimu-list {
    font-size: 12px;
    text-align: center;
    line-height: 18px;
  }
}
</style>