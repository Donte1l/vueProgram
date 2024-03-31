<template>
  <div>
    <p>服务器CPU型号：I9-14900K</p>
    <div class="systemInfo">
      <div class="cpu">
        <p style="font-family: YouShe; font-size: 30px">50%</p>
        <p style="font-size: 10px">CPU占用</p>
      </div>
      <div class="progress">
        <p style="font-size: 8px">
          服务器总内存:[32G] 当前使用: [11G]空闲内存: [21G]
        </p>
        <el-progress :percentage="50" :show-text="false" />
        <p style="font-size: 8px">
          服务器总存储: [512G]当前使用: [200G]空闲内存: [312G]
        </p>
        <el-progress :percentage="50" :show-text="false" />
      </div>
      <div class="memory">
        <p style="font-family: YouShe; font-size: 30px">50%</p>
        <p style="font-size: 10px">内存占用</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemInfo",
};
</script>

<style lang="less" scoped>
.systemInfo {
  background-image: url("../../assets/images/systemInfoBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 180px;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .cpu {
    flex: 1.3;
    margin-top: 70px;
  }
  .progress {
    flex: 2;
    margin-top: 60px;
  }
  .memory {
    flex: 1.3;
    margin-top: 70px;
  }
  p {
    color: white;
    text-align: center;
  }
  .el-progress {
    width: 200px;
    margin: 10px auto auto 10px;
  }
}
</style>
