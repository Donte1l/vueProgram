<template>
  <div class="middleInfoGroup">
    <MiddleInfo
      :info="result.onlinePlayers"
      :title="'当前在线玩家数量'"
      :color="color1"
      :first="true"
    />
    <MiddleInfo
      v-if="result && result.version"
      :info="result.version.split('-')[0]"
      :title="'当前服务器版本'"
      :color="color2"
    />
    <MiddleInfo
      :info="serverInfoCheckResult.servername"
      :title="'服务器名称'"
      :color="color1"
    />
    <MiddleInfo
      :info="serverInfoCheckResult.fzname"
      :title="'腐竹名称'"
      :color="color2"
    />
    <MiddleInfo
      :info="'氪金'"
      :title="'充值地址'"
      :color="color1"
      :payurl="serverInfoCheckResult.payurl"
    />
  </div>
</template>
<script>
import MiddleInfo from "@/components/manager/MiddleInfo.vue";

export default {
  name: "MiddleInfoGroup",
  components: { MiddleInfo },
  props: {
    result: {
      type: Object,
      required: true,
    },
    serverInfoCheckResult: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      color1: "#66FFFF",
      color2: "#FFBE44",
    };
  },
};
</script>

<style lang="less" scoped>
.middleInfoGroup {
  position: relative;
  top: 5%;
  display: flex;
  justify-content: space-around; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-wrap: nowrap;
}
</style>
