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
        :address="'/catchList'"
      />
      <Function
        :title="'传送'"
        :info="'点我前往玩家上下线信息页面'"
        :address="'/signList'"
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
  position: relative;
  top: 5%;
  width: 100%;
  p {
    color: white;
    font-size: 1.2rem;
  }
  .title {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  .functions {
    margin-top: 1rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
