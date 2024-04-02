<template>
  <div class="catchNews">
    <div class="title">
      <div
        style="
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
        "
      >
        <img src="../../assets/images/titileIcon.png" />
        <p style="color: white; font-size: 12px">最新精灵捕捉动态</p>
      </div>
      <p class="updateTime">更新时间 {{ updateTime }}</p>
    </div>
    <div class="contents">
      <div
        v-if="newList"
        v-for="(item, index) in newList"
        :key="index"
        class="content"
      >
        <p>{{ item.content }}</p>
        <p>{{ item.time }}</p>
      </div>
      <div class="more" @click="gotoNews">
        <img src="../../assets/images/titileIcon.png" />
        <p style="color: white; font-size: 10px">更多</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatchNews",
  props: {
    updateTime: {
      type: String,
      required: true,
    },
    newList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    gotoNews() {
      this.$router.push("/news");
    },
  },
};
</script>

<style lang="less" scoped>
.catchNews {
  margin-top: 20px;
  .title {
    p {
      color: white;
      font-size: 12px;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .updateTime {
      margin-top: 8px;
      font-size: 7px;
      color: #999999;
      margin-right: 10px;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        color: white;
        font-size: 10px;
        margin-right: 10px;
      }
    }
    .more {
      display: flex;
      flex-direction: row;
      cursor: pointer;
      margin-left: auto;
      margin-right: 10px;
    }
  }
}
</style>
