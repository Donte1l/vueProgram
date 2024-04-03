<template>
  <div class="little-info">
    <p class="title" style="color: white; font-size: 1rem">{{ title }}</p>
    <p
      class="context"
      :style="{
        color: color,
        fontFamily: 'YouShe',
        fontSize: '2.5rem',
      }"
    >
      {{ context }}
    </p>
  </div>
</template>
<script>
export default {
  name: "LittleInfo",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    context: {
      type: String,
      required: true,
      default: "",
    },
    color: {
      type: String,
      default: "rgba(254, 219, 101, 1)",
    },
  },
};
</script>

<style lang="less" scoped>
.little-info {
  position: absolute;
  background-image: url("../../assets/images/infoBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 44%;
  padding-top: calc(124 / 209 * 44%);
  .title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  .context {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
