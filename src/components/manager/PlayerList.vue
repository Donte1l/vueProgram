<template>
  <div class="playerList">
    <div class="top"></div>
    <div class="Players">
      <Player
        v-for="(player, index) in playersWithFallback"
        :key="index"
        :name="player.name"
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
  data() {
    return {
      playerList: [{ name: "Player 1" }, { name: "Player 2" }],
    };
  },
  computed: {
    playersWithFallback() {
      // 生成一个固定长度为 48 的数组
      // 首先包含 playerList 中的所有项
      // 然后用 { name: '' } 填充剩余位置
      return this.playerList.slice(0, 48).concat(
        Array(48 - this.playerList.length)
          .fill(null)
          .map(() => ({ name: "" }))
      );
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
  height: 163.2px;
  width: 534px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    width: auto;
    height: 50px;
  }
  .Players {
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 8px;
  }
  .more {
    cursor: pointer;
    position: absolute;
    color: white;
    font-size: 8px;
    margin-top: 175px;
    margin-left: 475px;
  }
}
</style>
