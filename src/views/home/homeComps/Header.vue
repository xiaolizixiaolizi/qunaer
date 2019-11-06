<template>
  <div class="header">
    <div class="left" @click="handleClick">
      <i class="iconfont iconjiantou-copy"></i>
    </div>
    <div class="sousou">
      <van-search
        placeholder="请输入搜索关键词"
        v-model="value"
        shape="round"
        background="$bgColor"
        @blur="onBlur(value)"
      />
    </div>

    <div class="right" @click="goCity">
      <span class="city">{{currentCity}}</span>
      <i class="iconfont iconjiantou"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    handleClick() {
      //  返回上一个页面
      this.$router.go(-1);
    },
    goCity() {
      this.$router.push({ name: "city" });
    },
    onBlur(value) {
      console.log(value);
    }
  },
  computed: {
    ...mapGetters({
      currentCity: "showCurrentCity"
    })
  },
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
// $bgColor = #00bcd4
// $darkTextColor = #333
// $aFont=12px;
.header {
  height: half(86);
  display: flex;
  flex-flow: row nowrap;
  background: $bgColor;
  color: #fff;
  line-height: half(86);
  font-size: 14px;
  overflow: hidden;

  .left {
    width: half(64);
    text-align: center;
  }

  .right {
    // width: half(120);
    margin: 0 10px;
    text-align: center;

    .iconjiantou {
      font-size: $aFont;
      margin-left: -2px;
    }
  }

  .sousou {
    flex: 1;
    background: $bgColor;

    .van-search {
      padding: 0;
      padding-top: 5px;
    }
  }
}
</style>