<template>
  <div class="functionGroup">
    <div class="title">
      <img src="../../assets/images/titileIcon.png" />
      <p>功能跳转</p>
    </div>
    <div class="functions">
      <Function
        :title="'传送'"
        :info="'点我前往捕捉精灵详情页面'"
        :address="'a'"
      />
      <Function
        :title="'传送'"
        :info="'点我前往捕捉精灵详情页面'"
        :address="'a'"
      />
      <Function />
      <Function />
    </div>
  </div>
</template>
<script>
import Function from "@/components/manager/Function.vue";
export default {
  name: "FunctionGroup",
  components: {
    Function,
  },
};
</script>

<style scoped>
.functionGroup {
  p {
    color: white;
    font-size: 12px;
  }
  .title {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  .functions {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 10px;
  }
}
</style>
