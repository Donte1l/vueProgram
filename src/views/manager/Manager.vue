<template>
  <el-container style="background-color: rgba(2, 0, 77, 1)">
    <el-header class="head">
      <img
        src="@/assets/images/top.png"
        alt="Header Image"
        style="width: 100%; height: auto"
      />
    </el-header>
    <el-container style="justify-content: space-between; height: 90vh">
      <div class="sideBox">
        <p style="color: white; font-size: 10px; margin-left: auto">
          ps: 页面所有数据都是3s获取一次 动态更新
        </p>
        <CircleInfo :percentage="50" num="44444" target="88888" />
        <LittleInfoGroup />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="mainBox"><SystemInfo /></div>
      <el-divider direction="vertical"></el-divider>
      <div class="sideBox">right</div>
    </el-container>
  </el-container>
</template>

<script>
import CircleInfo from "@/components/manager/CircleInfo.vue";
import LittleInfo from "@/components/manager/LittleInfo.vue";
import LittleInfoGroup from "@/components/manager/LittleInfoGroup.vue";
import SystemInfo from "@/components/manager/SystemInfo.vue";
export default {
  name: "Manager",
  components: { SystemInfo, LittleInfoGroup, LittleInfo, CircleInfo },
  data() {
    return {
      //进度条进度
      percentage: 50,
    };
  },
  methods: {
    format(percentage) {
      return percentage + "%距离88888只进度";
    },
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
  height: 90vh;
}

.el-divider {
  background-color: rgba(13, 83, 183, 1);
}
.el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 90vh;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>
