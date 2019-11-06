import { mapState } from 'vuex';
<template>
  <div class="host-city" v-if="Object.keys(hotcities).length!==0">
    <div>
      <p>当前城市</p>
      <ul>
        <li class="van-hairline--surround">{{currentCity}}</li>
      </ul>
    </div>
    <div>
      <p>热门城市</p>
      <ul>
        <li
          v-for="(item, index) in hotcities"
          :key="index"
          class="van-hairline--surround"
          @click="changeCity(item.name)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "HostCity",
  props: {
    hotcities: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  inheritAttrs: false,
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    ...mapMutations({
      getCurrentCity: "getCurrentCity"
    }),
    changeCity(city) {
      this.getCurrentCity({ currentCity: city });
      this.$router.push({ name: "home" });
    },

    
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
.host-city {
  position: relative;
  z-index: 2;
  padding: 0;
  margin: 0;

  p {
    font-size: 16px;
    margin: 3px 10px;
  }

  ul {
    margin: 0 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    font-size: 14px;

    li {
      flex: 0 0 30%;
      padding: 2px 0;
      margin: 0 0 5px 0;
      text-align: center;

      &.van-hairline--surround::after {
        border-color: #ccc;
      }
    }
  }
}
</style>