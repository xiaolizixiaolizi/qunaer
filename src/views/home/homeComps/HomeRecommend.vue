<template>
  <div class="home-recommend">
    <p class="recommend-title">热销推荐</p>
    <ul v-if="recommendlist.length!==0" class="recommend-list">
      <li
        v-for="(item, index) in recommendlist"
        :key="index.id"
        class="border-bottom"
        @click="goDetail(item.id)"
      >
        <img :src="item.imgUrl" alt class="recomend-img">
        <div class="recommend-info">
          <p class="recomend-title">{{item.title}}</p>
          <p class="recommend-desc">{{item.desc}}</p>
          <span class="recomend-detail">查看详情</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  components: {},
  props: {
    recommendlist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    goDetail(id) {
      console.log(id);
      this.$router.push({ name: "goodsDetail", params: { id } });
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
.home-recommend {
  .recommend-title {
    font-size: 18px;
    margin: 5px 0;
    text-indent: 1em;
    background: #eee;
  }

  .recommend-list {
    li {
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: 3px;

      img {
        width: 85px;
        margin-right: 10px;
        border-radius: 8px;
      }

      .recommend-info {
        flex: 1;
        font-size: 14px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;

        .recomend-title {
          color: #212121;
          font-size: 16px;
        }

        .recommend-desc {
          width: 280px;
          color: #666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .recomend-detail {
          align-self: flex-start;
          padding: 4px;
          background: $showDetail;
          color: #fff;
        }
      }
    }
  }

  .demo {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
