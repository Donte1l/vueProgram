<template>
  <div class="playerList">
    <p class="updateTime">更新时间:{{ updateTime }}</p>
    <div class="playersContent">
      <Player
        v-for="(player, index) in playerList"
        :key="index"
        :name="player"
      />
    </div>
    <a @click="handlerMore" class="more" v-if="playerList.length > 48"
      >查看详情</a
    >
  </div>
</template>

<script>
import Player from "@/components/manager/Player.vue";
export default {
  name: "PlayerList",
  components: {
    Player,
  },
  props: {
    playerList: {
      type: Array,
      required: true,
    },
    updateTime: {
      type: String,
      default: "time",
    },
  },
  methods: {
    handlerMore() {},
  },
};
</script>

<style lang="less" scoped>
.playerList {
  background-image: url("../../assets/images/playerListBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 0;
  width: 95%;
  top: 8%;
  padding-top: (272 / 890 * 95%);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .updateTime {
    position: absolute;
    top: 10%;
    left: 83%;
    white-space: nowrap;
    font-size: 0.7rem;
    color: #999999;
  }
  .playersContent {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 1.2rem;
    row-gap: 0.8rem;
  }
  .more {
    cursor: pointer;
    position: absolute;
    top: 120%;
    left: 95%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1rem;
  }
}
</style>
