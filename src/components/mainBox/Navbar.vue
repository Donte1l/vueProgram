<template>
  <el-header height="40px">
    <div class="left"></div>
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

<style scoped>
.el-header {
  background-color: #ffffff;
  color: white;
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  background-image: url("../../assets/images/logo.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 18.5px;
  width: 130px;
}
</style>
