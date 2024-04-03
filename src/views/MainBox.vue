<template>
  <el-container>
    <SideMenu />
    <el-container direction="vertical">
      <Navbar />
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from "@/components/mainBox/Navbar.vue";
import SideMenu from "@/components/mainBox/SideMenu.vue";
export default {
  name: "MainBox",
  components: { SideMenu, Navbar },
  mounted() {},
};
</script>
<style lang="less" scoped>
.el-container {
  background-color: #f5f5f5;
  height: 100%;
  //width: 100%;
}
</style>
