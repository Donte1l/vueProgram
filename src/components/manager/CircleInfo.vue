<template>
  <div class="catchNumBox">
    <p class="bigTitle">服务器精灵总捕捉量</p>
    <div class="content">
      <div class="percent_box">
        <el-progress
          type="circle"
          :percentage="percentage"
          :stroke-width="7"
          :width="105"
          :show-text="false"
          :color="'#F7B500'"
          :define-back-color="'#000000'"
          class="circleProgress"
        />
        <div class="text_box">
          <p class="title">{{ percentage }}%</p>
          <p class="text">距离{{ target }}只进度</p>
        </div>
        <img src="../../assets/images/catchNumCircle.png" class="under-image" />
      </div>
      <div class="circleImg">
        <span class="allCatchSum">{{ num }}只</span>
        <p class="reward">进度100%后联系腐竹发放福利</p>
      </div>
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

<style lang="less" scoped>
.catchNumBox {
  position: relative;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("../../assets/images/catchNumBack.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%; /* 设置元素宽度为父元素宽度的90% */
  height: 0; /* 将高度设置为0，以便根据宽高比自动生成 */
  padding-top: calc(167 / 442 * 90%); /* 根据背景图片的原始宽高比计算高度 */
  .bigTitle {
    position: absolute;
    top: -2%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    white-space: nowrap;
  }
  .content {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 75%;
    .percent_box {
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 30%;
      height: 0%;
      padding-top: 30%;
      z-index: 1;
      .circleProgress {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
      .text_box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 100%;
        z-index: 2;
        .title {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 2.5rem;
          font-family: YouShe;
        }
        .text {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 0.7rem;
          white-space: nowrap;
        }
      }
      .under-image {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }
    .circleImg {
      position: absolute;
      top: 50%;
      left: 61.5%;
      transform: translate(-50%, -50%);
      width: 77%;
      height: 0;
      padding-top: calc(113 / 341 * 77%);
      background-image: url("../../assets/images/catchNumUp.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 0;
      .allCatchSum {
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 3rem;
        font-width: bold;
        font-family: YouShe;
      }
      .reward {
        position: absolute;
        top: 75%;
        left: 69%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 0.8rem;
        white-space: nowrap;
      }
    }
  }
}
</style>
