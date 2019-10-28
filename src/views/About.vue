<template>
  <div class>
    <h3></h3>
    <div class="demo"></div>
  </div>
</template>

<script>
import bali from "../netwrok/bali";
const { getBali } = bali;
export default {
  name: "",
  components: {},
  data() {
    return {
      limit:0,
      data:[]
    };
  },
  methods: {
    // *******************************网络请求*******************************
    async _getBali(limit) {
      let res =await getBali(limit);
      this.data.push(...res)
      this.limit=limit+20
      
    }
    // *******************************逻辑处理*******************************
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
    // this._getBali(this.limit);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="stylus" scoped>
.demo {
  width: $headerHeight;
  height: 100px;
  border: 1px solid #000;
  background: $bgColor;
}
</style>
