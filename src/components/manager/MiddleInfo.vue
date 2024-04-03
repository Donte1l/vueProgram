<template>
  <div class="info">
    <p class="info-text" :style="{ color: color }">
      {{ info }}
    </p>
    <p class="title-text" :style="{ color: color }">{{ title }}</p>
    <a v-if="payurl.length > 0" class="gotoPay" :href="'http://' + payurl"
      >点击跳转</a
    >
    <img v-if="first" class="logo" src="../../assets/images/logoFirst.png" />
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
    payurl: {
      type: String,
      default: "",
    },
    first: { type: Boolean, default: false },
  },
};
</script>

<style lang="less" scoped>
.info {
  background-image: url("../../assets/images/middleBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 15%;
  height: 0;
  padding-top: (177 / 156 * 15%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  p {
    margin-left: auto;
    margin-right: auto;
    color: white;
    white-space: nowrap;
  }
  .info-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: YouShe;
    font-size: 2rem;
    font-weight: bold;
  }
  .title-text {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
  }
  .gotoPay {
    position: absolute;
    top: 90%;
    left: 80%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.8rem;
    white-space: nowrap;
  }
  .logo {
    position: absolute;
    top: -15%;
    left: 0%;
    width: 55%;
    z-index: 2;
  }
}
</style>
