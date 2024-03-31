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
  background-image: url("../../assets/images/functionBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 83.4px;
  width: 124.2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .title {
    color: #66ffff;
    font-size: 22px;
    margin-top: 10px;
    font-family: YouShe;
  }
  .info {
    margin-top: 20px;
    color: white;
    font-size: 8px;
  }
  p {
    margin-left: auto;
    margin-right: auto;
  }
}
.clickable {
  cursor: pointer;
}
</style>
