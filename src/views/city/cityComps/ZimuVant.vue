<template>
  <van-index-bar
    v-if="Object.keys(cities).length!==0"
    :sticky="true"
    :sticky-offset-top="228"
    :index-list="indexList"
  >
    <div v-for="(city, index) in filterCities" :key="index">
      <van-index-anchor :index="index">{{index}}</van-index-anchor>

      <van-cell
        v-for="item in city"
        :key="item.id"
        :title="item.name"
        @click.native="changeCity(item.name)"
      />
    </div>

    <p v-show="Object.keys(filterCities).length==0">没有匹配到任何内容</p>
  </van-index-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ZimuVant",
  components: {},
  props: {
    cities: {
      type: Object,
      default() {
        return {};
      }
    },
    searchkeyword: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // bscroll: false
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    ...mapMutations({
      getCurrentCity: "getCurrentCity"
    }),
    changeCity(city) {
      this.getCurrentCity({ currentCity: city });
      //跳转home
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapState({
      keyword: "keyword" //同data值。可以在methods使用在computed中使用
    }),
    indexList() {
      return Object.keys(this.cities);
    },
    filterCities() {
      let obj = {}; //提前准备一个返回的对象 {}
      for (const key in this.cities) {
        if (!this.cities.hasOwnProperty(key)) continue;
        let tempArr = this.cities[key].filter(
          item =>
            item.name.includes(this.keyword) ||
            item.spell.includes(this.keyword)
        );
        if (tempArr.length == 0) continue; //不能用break否则提前终止for in循环。
        obj[key] = tempArr; //给对象加属性和赋值
      }
      return obj;
    },
    test() {
      return this.keyword;
    }
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.bscroll = new Bscroll(this.$refs.wrapper);
  },
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='stylus' scoped>
.test {
  // overflow: hidden;
}
</style>

