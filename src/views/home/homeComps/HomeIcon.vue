<template>
  <div class="home-icon">
    <van-grid :column-num="4" square :border="false">
      <van-grid-item v-for="item in iconList " :key="item.id">
        <van-image :src="item.imgUrl" class="icon-img"/>
        <span class="desc">{{item.desc}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HomeIcon",
  components: {},
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          desc: "滑雪季"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          desc: "泡温泉"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          desc: "游乐园"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          desc: "必游榜单"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          desc: "演出"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          desc: "城市观光"
        }
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
.home-icon {
  .desc {
    font-size: 14px;
  }

  .icon-img {
    width: 70%;
  }
}
</style>