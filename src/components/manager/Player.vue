<template>
  <div class="player">
    <p style="color: white; font-size: 8px">{{ name }}</p>
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

<style scoped>
.player {
  background-image: url("../../assets/images/playerBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 46.8px;
  height: 15.6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
