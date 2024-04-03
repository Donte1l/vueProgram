<template>
  <div class="player">
    <p class="playerName">{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: "Player",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.player {
  background-image: url("../../assets/images/playerBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 10%;
  height: 0;
  padding-top: calc(26 / 78 * 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .playerName {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.8rem;
  }
}
</style>
