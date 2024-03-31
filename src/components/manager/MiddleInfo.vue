<template>
  <div class="info">
    <p :style="{ fontFamily: 'YouShe', color: color }">{{ info }}</p>
    <p style="color: white; font-size: 9px">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "middleInfo",
  props: {
    info: {
      type: String,
      request: true,
    },
    title: {
      type: String,
      request: true,
    },
    color: {
      type: String,
      default: "#66FFFF",
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  background-image: url("../../assets/images/middleBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 78px;
  height: 88.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  p {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
