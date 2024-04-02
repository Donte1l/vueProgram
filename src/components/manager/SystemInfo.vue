<template>
  <div>
    <div class="systemInfo">
      <div class="cpu">
        <p style="font-family: YouShe; font-size: 30px">
          {{ result.cpuPercent }}
        </p>
        <p style="font-size: 10px">CPU占用</p>
      </div>
      <div class="progress">
        <p class="top">服务器CPU型号：{{ result.cpuMs }}</p>
        <p style="font-size: 8px">
          服务器总内存:[{{ result.maxMemory }}] 当前使用: [{{
            result.usedMemory
          }}]空闲内存: [{{ result.freeMemory }}]
        </p>
        <el-progress :percentage="50" :show-text="false" />
        <p style="font-size: 8px">
          服务器总存储: [{{ result.totalSpace }}]当前使用: [{{
            result.usableSpace
          }}]空闲内存: [{{ result.freeSpace }}]
        </p>
        <el-progress :percentage="50" :show-text="false" />
      </div>
      <div class="memory">
        <p style="font-family: YouShe; font-size: 30px">
          {{
            Math.round(
              (parseInt(result.usedMemory) / parseInt(result.maxMemory)) * 100
            )
          }}%
        </p>
        <p style="font-size: 10px">内存占用</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemInfo",
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
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

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    p {
      margin-left: auto;
      margin-right: auto;
    }
    .top {
      font-size: 12px;
      color: white;
    }
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
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
