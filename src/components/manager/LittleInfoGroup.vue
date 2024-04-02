<template>
  <div>
    <div class="littleInfo-wrapper">
      <LittleInfo
        :title="'今日上线玩家数量'"
        :context="result.playerOnlineCount"
        :color="color2"
      />
      <LittleInfo
        :title="'总上线玩家数量'"
        :context="result.allServerPlayerOnlineCount"
        :color="color1"
      />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo
        :title="'今日捕捉数量'"
        :context="result.todaySumCount"
        :color="color1"
      />
      <LittleInfo
        :title="'总捕捉数量'"
        :context="result.allServerCatchPokeCount"
        :color="color1"
      />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo
        :title="'今日捕捉成功数量'"
        :context="result.todayCatchPokeCountSuccess"
        :color="color2"
      />
      <LittleInfo
        :title="'总服务器登录次数'"
        :context="result.allServerOnlineCount"
        :color="color1"
      />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo
        :title="'今日捕捉失败数量'"
        :context="result.todayCatchPokeCountError"
        :color="color1"
      />
      <LittleInfo :title="'未开放 (可反馈)'" :context="''" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo
        :title="'今日服务器登录次数'"
        :context="result.serverOnlineCount"
        :color="color2"
      />
      <LittleInfo :title="'未开放 (可反馈)'" :context="''" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo
        :title="'今日服务器退出次数'"
        :context="result.serverOfflineCount"
        :color="color2"
      />
      <LittleInfo :title="'未开放 (可反馈)'" :context="''" :color="color1" />
    </div>
  </div>
</template>
<script>
import LittleInfo from "@/components/manager/LittleInfo.vue";

export default {
  name: "LittleInfoGroup",
  components: { LittleInfo },
  props: {
    result: {
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

<style scoped>
.littleInfo-wrapper {
  display: flex;
  justify-content: space-evenly; /* 可选：根据需要调整子元素之间的间距 */
}
</style>
