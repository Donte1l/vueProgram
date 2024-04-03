<template>
  <el-header>
    <div class="left">
      <div class="logoLeft"></div>
    </div>
    <div class="right">
      <div class="logo"></div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #ffffff;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  background-image: url("../../assets/images/logo.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1.85rem;
  width: 13rem;
}
.logoLeft {
  background-image: url("../../assets/images/logoLeft.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 3.6rem;
  width: 17.3rem;
}
</style>
