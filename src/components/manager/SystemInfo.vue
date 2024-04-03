<template>
  <div>
    <div class="systemInfo">
      <div class="cpu">
        <p style="font-family: YouShe; font-size: 4rem">
          {{ result.cpuPercent }}
        </p>
        <p style="font-size: 1rem">CPU占用</p>
      </div>
      <div class="progress">
        <p class="top">服务器CPU型号：{{ result.cpuMs }}</p>
        <p style="font-size: 0.8rem">
          服务器总内存:[{{ result.maxMemory }}] 当前使用: [{{
            result.usedMemory
          }}]空闲内存: [{{ result.freeMemory }}]
        </p>
        <el-progress :percentage="50" :show-text="false" />
        <p style="font-size: 0.8rem">
          服务器总存储: [{{ result.totalSpace }}]当前使用: [{{
            result.usableSpace
          }}]空闲内存: [{{ result.freeSpace }}]
        </p>
        <el-progress :percentage="50" :show-text="false" />
      </div>
      <div class="memory">
        <p style="font-family: YouShe; font-size: 3rem">
          {{
            Math.round(
              (parseInt(result.usedMemory) / parseInt(result.maxMemory)) * 100
            )
          }}%
        </p>
        <p style="font-size: 1rem">内存占用</p>
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
  width: 91%;
  height: 0;
  padding-top: (284 / 873.56 * 91%);
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  .cpu {
    position: absolute;
    top: 30%;
    left: 15%;
    transform: translate(-50%, -50%);
    margin-top: 70px;
  }
  .progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    p {
      margin-left: auto;
      margin-right: auto;
    }
    .top {
      font-size: 1.2rem;
      color: white;
      width: 80%;
    }
  }
  .memory {
    position: absolute;
    top: 30%;
    left: 85%;
    transform: translate(-50%, -50%);
    margin-top: 70px;
  }
  p {
    color: white;
    text-align: center;
  }
  .el-progress {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
