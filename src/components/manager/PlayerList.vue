<template>
  <div class="playerList">
    <div class="top"></div>
    <div class="Players">
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
