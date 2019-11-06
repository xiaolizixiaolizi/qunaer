<template>
  <div class="city-list" ref="wrapper">
    <div class="content">
      <div class="current-list">
        <p class="city-title">当前城市</p>
        <ul class="city-name">
          <li  class="van-hairline--surround">北京</li>
        </ul>
      </div>

      <div class="host-list">
        <p class="city-title">热门城市</p>
        <ul class="city-name" v-if="hotcities .length!==0">
          <li
            class="van-hairline--surround"
            v-for="(item, index) in hotcities"
            :key="index"
          >{{item.name}}</li>
        </ul>
      </div>

      <div class="city-area" v-if="Object.keys(cities).length!==0">
        <div v-for="(city, index) in cities" :key="index">
          <p class="city-title border">{{index}}</p>
          <ul>
            <li
              class="item van-hairline--surround"
              v-for="(item, indey) in city"
              :key="indey"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "CityList",
  props: {
    cities: {
      type: Object,
      default() {
        return {};
      }
    },
    hotcities: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  data() {
    return {
      scroll: null
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
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper); //获取dom元素
    // console.log(Object.keys(this.cities));
  },
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='stylus' scoped>
// @import ; 引入公共css类
.city-list {
  overflow: hidden;
  height: calc(100vh - 90px);

  .city-title {
    background: #eee;
    color: #666;
    font-size: 14px;
    line-height: 22px;
    text-indent: 1em;
  }

  .city-name {
    margin: 5px 10px 0;
    display: flex;
    flex-flow: row wrap;

    // justify-content: space-between;
    li {
      // border: 1px solid #ccc;
      border-radius: 3px;
      height: 24px;
      line-height: 24px;
      flex: 0 0 26%;
      text-align: center;
      margin-right: 5px;
      margin-bottom: 5px;
      font-size: 14px;

      &:nth-child(3n-1) {
        // background: red;
        margin: 0 20px;
      }

      &.van-hairline--surround::after {
        border-color :#ccc;
      }
    }
  }

  .city-area {
    ul {
      margin-right: 20px;

      .item {
        line-height: 30px;
        font-size: 14px;
        text-indent: 1em;

        // border-bottom: 1px solid #ccc;
        &:last-child {
          margin-bottom: 10px;
          border: none;
        }
      }
    }
  }
}
</style>


