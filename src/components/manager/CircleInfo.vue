<template>
  <div class="catchNumBox">
    <div class="percent_box">
      <el-progress
        type="circle"
        :percentage="percentage"
        :stroke-width="6"
        :width="90"
        :show-text="false"
      />
      <div class="text_box">
        <img src="../../assets/images/catchNumCircle.png" class="under-image" />
        <p class="title">{{ percentage }}%</p>
        <p class="text">距离{{ target }}只进度</p>
      </div>
    </div>
    <div>
      <img
        src="../../assets/images/catchNumUp.png"
        style="height: 75px; margin-left: -40px"
      />
      <p
        style="
          position: absolute;
          margin-left: 50px;
          margin-top: -57px;
          color: white;
          font-size: 20px;
        "
      >
        {{ num }}只
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CircleInfo",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    target: {
      type: String,
      default: "88888",
    },
    num: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.catchNumBox {
  display: flex;
  align-items: center;
  background-image: url("../../assets/images/catchNumBack.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 100px;
  .percent_box {
    position: relative;
    text-align: center;
    .text_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .under-image {
      position: absolute;
      width: 77px;
      margin-left: -39px;
      margin-top: -41px;
      z-index: -2; /* 将图片置于其他元素之下 */
    }
    .title {
      position: absolute;
      color: white;
      font-size: 30px;
      margin-left: -20px;
      margin-top: -35px;
    }
    .text {
      position: absolute;
      margin-left: -32px;
      margin-top: 5px;
      color: white;
      font-size: 8px;
      white-space: nowrap;
    }
  }
}
</style>
