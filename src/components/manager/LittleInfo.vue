<template>
  <div class="little-info">
    <p style="color: white; font-size: 13px">{{ title }}</p>
    <p
      :style="{
        color: color,
        fontFamily: 'YouShe',
        fontSize: '20px',
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

<style scoped>
.little-info {
  background-image: url("../../assets/images/infoBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 106px;
  height: 60.1px;
  margin-top: 12px;
  p {
    margin-top: 2px;
    margin-left: 5px;
  }
}
</style>
