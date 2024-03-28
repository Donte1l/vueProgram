<template>
  <el-header>
    <!--    <el-button @click="handleCollapsed">click</el-button>-->
    <div class="left">
      <i
        style="cursor: pointer"
        class="el-icon-menu"
        @click="handleCollapsed"
      />
      <span style="margin-left: 10px">分布式加密存储系统</span>
    </div>
    <div class="right">
      <span>欢迎回来</span>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i
            class="el-icon-s-custom"
            style="cursor: pointer; color: white; font-size: 18px"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="upload">上传文件</el-dropdown-item>
          <el-dropdown-item command="list">文件列表</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleCollapsed() {
      this.$store.commit("changeCollapsed");
    },
    handleCommand(command) {
      if (command === "upload") {
        this.$router.push({ path: "/upload" });
      } else if (command === "list") {
        this.$router.push("/list");
      }
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #2d3a4b;
  color: white;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
