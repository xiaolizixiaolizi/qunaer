<template>
  <div class="city-sousou">
    <van-search placeholder="请输入搜索关键词" v-model="value" background="$bgColor" @blur="onSearch"/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "CitySousou",
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    ...mapMutations({
      getWord:'getWord'
    }),
    onSearch() {
      // 搜索组件改变store值
      this.getWord({keyword:this.value})
      // this.$store.commit("getWord", { keyword: this.value });
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
// @import ; 引入公共css类city-sousou
.city-sousou {
  background: $bgColor;

  .van-search {
    padding-bottom: 3px;
  }
}
</style>