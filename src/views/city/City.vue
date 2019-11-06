<template>
  <div class="city">
    <div class="city-top">
      <city-header></city-header>
      <city-sousou @onSearch="onSearch"></city-sousou>
      <host-city :hotcities="hotCities"></host-city>
    </div>
    <!-- <city-list  :hotcities="hotCities"></city-list> -->
    <!-- <zi-mu></zi-mu> -->
    <ZimuVant :cities="cities" :searchkeyword="searchKeyWord"></ZimuVant>
  </div>
</template>

<script>
import CityHeader from "./cityComps/CityHeader";
import CitySousou from "./cityComps/CitySousou";
// import CityList from "./cityComps/CityList";
// import ZiMu from "./cityComps/ZiMu";
import ZimuVant from "./cityComps/ZimuVant";
import HostCity from "./cityComps/HostCity";
import { getCity } from "network/city";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySousou,
    // CityList,
    // ZiMu
    ZimuVant,
    HostCity
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      searchKeyWord: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    async _getCity() {
      let res = await getCity();
      this.cities = res.cities;
      this.hotCities = res.hotCities;
    },
    // *******************************逻辑处理*******************************

    onSearch(value) {
      this.searchKeyWord = value;
    }
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this._getCity();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.container = this.$refs.container;
  },
  updated() {}, //生命周期 - 更新之后
  activated() {
    console.log('city')
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='stylus' scoped>
.city {
  position: relative;

  .city-top {
    position: sticky;
    top: 0px;
    z-index: 1;
    background: #fff;
  }
}
</style>