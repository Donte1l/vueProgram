<template>
  <el-container style="background-color: rgba(2, 0, 77, 1)">
    <el-header class="head">
      <img
        src="@/assets/images/top.png"
        alt="Header Image"
        style="width: 100%; height: auto"
      />
    </el-header>
    <el-container
      :style="{
        justifyContent: 'space-between',
        height: isBigRatio ? '64.8vh' : '73vh',
      }"
    >
      <div class="sideBox">
        <CircleInfo :percentage="50" num="44444" target="88888" />
        <LittleInfoGroup />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="mainBox">
        <SystemInfo />
        <MiddleInfoGroup />
        <PlayerList />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="sideBox">
        <FunctionGroup />
        <CatchNews />
      </div>
    </el-container>
  </el-container>
</template>

<script>
import CircleInfo from "@/components/manager/CircleInfo.vue";
import LittleInfo from "@/components/manager/LittleInfo.vue";
import LittleInfoGroup from "@/components/manager/LittleInfoGroup.vue";
import SystemInfo from "@/components/manager/SystemInfo.vue";
import MiddleInfo from "@/components/manager/MiddleInfo.vue";
import MiddleInfoGroup from "@/components/manager/MiddleInfoGroup.vue";
import PlayerList from "@/components/manager/PlayerList.vue";
import FunctionGroup from "@/components/manager/FunctionGroup.vue";
import CatchNews from "@/components/manager/CatchNews.vue";
export default {
  name: "Manager",
  components: {
    CatchNews,
    FunctionGroup,
    PlayerList,
    MiddleInfoGroup,
    MiddleInfo,
    SystemInfo,
    LittleInfoGroup,
    LittleInfo,
    CircleInfo,
  },
  data() {
    return {
      //进度条进度
      percentage: 50,
      isBigRatio: false,
    };
  },
  methods: {
    format(percentage) {
      return percentage + "%距离88888只进度";
    },
  },
  mounted() {
    window.screen.width * window.devicePixelRatio > 3840
      ? (this.isBigRatio = true)
      : (this.isBigRatio = false);
  },
};
</script>

<style scoped lang="less">
.head {
  height: 10vh;
}
.sideBox {
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
}
.mainBox {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
}

.el-divider {
  background-color: rgba(13, 83, 183, 1);
}
.el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: auto;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>
