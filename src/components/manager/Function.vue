<template>
  <div
    class="function"
    :class="{ clickable: address && address !== '' }"
    @click="gotoAddress"
  >
    <p class="title">{{ title }}</p>
    <p class="info">{{ info }}</p>
  </div>
</template>
<script>
export default {
  name: "Function",
  props: {
    title: {
      type: String,
      default: "待更新",
    },
    info: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
  },
  methods: {
    gotoAddress() {
      if (this.address && this.address !== "") {
        this.$router.push(this.address);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.function {
  position: relative;
  background-image: url("../../assets/images/functionBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 42%;
  height: 0;
  padding-top: calc(139 / 207 * 42%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #66ffff;
    font-size: 2.2rem;
    font-family: YouShe;
  }
  .info {
    position: absolute;
    top: 73%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.8rem;
    white-space: nowrap;
  }
}
.clickable {
  cursor: pointer;
}
</style>
