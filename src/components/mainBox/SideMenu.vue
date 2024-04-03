<template>
  <el-aside :width="$store.state.isCollapsed ? '80px' : '200px'">
    <el-menu
      :collapse="$store.state.isCollapsed"
      :collapse-transition="false"
      :router="true"
      :default-active="this.$route.path"
    >
      <el-button type="primary" size="small">点击反馈</el-button>
      <el-divider />
      <el-menu-item
        index="/manager"
        style="font-family: YouShe; font-size: 16px; color: #999999"
        >数据大屏</el-menu-item
      >
      <el-submenu index="fileManger">
        <template slot="title">
          <div style="display: flex">
            <img
              style="
                width: 14px;
                height: 14px;
                margin-top: auto;
                margin-bottom: auto;
              "
              src="../../assets/images/logoFile.png"
            />
            <span style="font-family: YouShe">数据中心</span>
          </div>
        </template>
        <el-menu-item index="/center" style="font-family: YouShe"
          >简介</el-menu-item
        >
        <el-menu-item index="/catchList" style="font-family: YouShe"
          >玩家捕捉记录</el-menu-item
        >
        <el-menu-item index="/signList" style="font-family: YouShe"
          >玩家上下线记录</el-menu-item
        >
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

<style lang="less" scoped>
.el-aside {
  width: 30%;
  height: 100vh;
  .el-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
.el-divider--horizontal {
  margin: 0.5rem auto;
  width: 12rem;
}
//
///deep/ .el-submenu__title {
//  font-size: 1rem !important;
//  height: 3rem !important;
//  line-height: 3rem !important;
//}
//
///deep/ .el-button--small {
//  font-size: 1rem !important;
//  width: 12rem !important;
//  margin-left: auto !important;
//  margin-right: auto !important;
//  margin-top: 0.5rem !important;
//}
//
///deep/ .el-menu-item {
//  height: 3rem !important;
//  line-height: 3rem !important;
//  padding: 0 4.5rem 0 5rem !important;
//  min-width: 0 !important;
//  font-size: 1rem !important;
//}
</style>
