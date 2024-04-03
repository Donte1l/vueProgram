<template>
  <div class="catchNews">
    <div class="title">
      <div style="display: flex; flex-direction: row; gap: 1rem">
        <img src="../../assets/images/titileIcon.png" />
        <p style="color: white">最新精灵捕捉动态</p>
      </div>
      <p class="updateTime">更新时间 {{ updateTime }}</p>
    </div>
    <div class="contents">
      <div v-if="newList" v-for="(item, index) in newList" :key="index">
        <div class="content">
          <p>{{ item.content }}</p>
          <p>{{ item.time }}</p>
        </div>
        <img class="buttom" src="../../assets/images/newButtom.png" />
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
  position: relative;
  top: 8%;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    .updateTime {
      position: relative;
      margin-top: 0.8rem;
      font-size: 0.7rem;
      color: #999999;
      margin-right: 1rem;
    }
    p {
      color: white;
      font-size: 1.2rem;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        color: white;
        font-size: 1rem;
        margin-right: 1rem;
        white-space: nowrap;
      }
    }
    .more {
      display: flex;
      flex-direction: row;
      cursor: pointer;
      margin-left: auto;
      margin-right: 1rem;
    }
  }
  .buttom {
    width: 95%;
  }
}
</style>
