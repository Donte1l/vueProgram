<template>
  <div>
    <div class="littleInfo-wrapper">
      <LittleInfo :title="'title1'" :context="'context1'" :color="color2" />
      <LittleInfo :title="'title1'" :context="'context1'" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo :title="'title1'" :context="'context1'" :color="color1" />
      <LittleInfo :title="'title1'" :context="'context1'" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo :title="'title1'" :context="'context1'" :color="color2" />
      <LittleInfo :title="'title1'" :context="'context1'" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo :title="'title1'" :context="'context1'" :color="color1" />
      <LittleInfo :title="'未开放 (可反馈)'" :context="''" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo :title="'title1'" :context="'context1'" :color="color2" />
      <LittleInfo :title="'未开放 (可反馈)'" :context="''" :color="color1" />
    </div>
    <div class="littleInfo-wrapper">
      <LittleInfo :title="'title1'" :context="'context1'" :color="color2" />
      <LittleInfo :title="'未开放 (可反馈)'" :context="''" :color="color1" />
    </div>
  </div>
</template>
<script>
import LittleInfo from "@/components/manager/LittleInfo.vue";

export default {
  name: "LittleInfoGroup",
  components: { LittleInfo },
  data() {
    return {
      color1: "rgb(102, 255, 255)",
      color2: "rgb(254, 219, 101)",
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
