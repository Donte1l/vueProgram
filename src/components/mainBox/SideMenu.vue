<template>
  <el-aside :width="$store.state.isCollapsed ? '80px' : '200px'">
    <!--    <h5>默认颜色</h5>-->
    <el-menu
      :collapse="$store.state.isCollapsed"
      :collapse-transition="false"
      :router="true"
      :default-active="this.$route.path"
    >
      <el-submenu index="fileManger">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>文件管理</span>
        </template>
        <el-menu-item index="/upload">文件上传</el-menu-item>
        <el-menu-item index="/list">文件列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style scoped>
.el-aside {
  height: 100vh;
  .el-menu {
    height: 100vh;
  }
}
::-webkit-scrollbar {
  width: 5px;
  position: absolute;
}
</style>
