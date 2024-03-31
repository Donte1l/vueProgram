<template>
  <el-aside :width="$store.state.isCollapsed ? '80px' : '150px'">
    <el-menu
      :collapse="$store.state.isCollapsed"
      :collapse-transition="false"
      :router="true"
      :default-active="this.$route.path"
    >
      <el-button type="primary" size="small">点击反馈</el-button>
      <el-divider />
      <el-submenu index="fileManger">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item index="/center">简介</el-menu-item>
        <el-menu-item index="/catchList">玩家捕捉记录</el-menu-item>
        <el-menu-item index="/signList">玩家上下线记录</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "SideMenu",
  mounted() {},
};
</script>

<style scoped>
.el-aside {
  height: 100vh;
  .el-menu {
    height: 100vh;
    display: flex;

    flex-direction: column;
  }
}
.el-divider--horizontal {
  margin: 5.5px auto;
  width: 120px;
}

/deep/ .el-submenu__title {
  font-size: 10px !important;
  height: 30px !important;
  line-height: 30px !important;
}

/deep/ .el-button--small {
  font-size: 10px !important;
  width: 120px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 5.5px !important;
}

/deep/ .el-menu-item {
  height: 30px !important;
  line-height: 30px !important;
  padding: 0 45px 0 50px !important;
  min-width: 0px !important;
  font-size: 10px !important;
}
</style>
