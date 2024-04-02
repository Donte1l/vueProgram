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
        <CircleInfo
          :percentage="percentage"
          :num="sumResult.allServerCatchPokeCount"
          :target="target"
        />
        <LittleInfoGroup :result="sumResult" />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="mainBox">
        <SystemInfo :result="serverResult" />
        <MiddleInfoGroup :result="serverResult" />
        <PlayerList :playerList="playerListFilter" />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="sideBox">
        <FunctionGroup />
        <CatchNews :newList="newList" :updateTime="newUpdateTime" />
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
import { detectZoom } from "@/utils/detectZoom.js";
import { sumPokeCount, timeGetServerInfo, maxPokeCatchCount } from "@/api/api";

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
      target: "80000",
      percentage: 0,
      isBigRatio: false,
      sumResult: {
        todaySumCount: "",
        todayCatchPokeCountSuccess: "",
        todayCatchPokeCountError: "",
        allServerCatchPokeCount: "",
        allServerCatchPokeCountTarget: "",
        playerOnlineCount: "",
        serverOnlineCount: "",
        serverOfflineCount: "",
        allServerOnlineCount: "",
        allServerOfflineCount: "",
        allServerPlayerOnlineCount: "",
      },
      serverResult: {},
      catchResult: {},
      playerListFilter: [],
      newList: [],
      newUpdateTime: "",
    };
  },
  mounted() {
    const m = detectZoom();
    if (window.screen.width * window.devicePixelRatio >= 3840) {
      switch (m) {
        // 4k屏时屏幕缩放比为100%
        case 100:
          document.body.style.zoom = 100 / 50;
          break;
        // 4k屏时屏幕缩放比为125%
        case 125:
          document.body.style.zoom = 100 / 62.5;
          break;
        // 4k屏时屏幕缩放比为150%
        case 150:
          document.body.style.zoom = 100 / 75;
          break;
        // 4k屏时屏幕缩放比为175%
        case 175:
          document.body.style.zoom = 1.5;
          break;
        case 219:
          document.body.style.zoom = 140 / 100;
          break;
        // 4k屏时屏幕缩放比为225%
        case 225:
          document.body.style.zoom = 100 / 112.485;
          break;

        default:
          break;
      }
    } else {
      document.body.style.zoom = 155 / Number(m);
    }
    window.screen.width * window.devicePixelRatio > 3840
      ? (this.isBigRatio = true)
      : (this.isBigRatio = false);

    sumPokeCount().then((res) => {
      this.sumResult = res.result;
      if (
        this.sumResult.allServerCatchPokeCountTarget &&
        this.sumResult.allServerCatchPokeCountTarget != ""
      )
        this.target = this.sumResult.allServerCatchPokeCountTarget;
      this.percentage = parseFloat(
        (
          parseInt(this.sumResult.allServerCatchPokeCount) /
          parseInt(this.target)
        ).toFixed(1)
      );
    });

    timeGetServerInfo().then((res) => {
      this.serverResult = res.result;
      this.playerListFilter = this.serverResult.playerList
        .slice(0, 48)
        .concat(Array(48 - this.serverResult.playerList.length).fill(""));
    });

    maxPokeCatchCount({ pageSize: "12", pageNum: "1" }).then((res) => {
      console.log(res);
      this.catchResult = res.result;
      this.catchResult.content.slice(0, 12).forEach((item) => {
        let obj = {
          content: "",
          time: "",
        };
        obj.content =
          item.playername +
          " 捕捉了 " +
          item.englishname +
          " 使用 " +
          item.pokeball +
          " ";
        if (item.istrue === "捕捉成功 T") obj.content += "成功！";
        else obj.content += "失败...";
        obj.time = item.capturetime;
        this.newList.push(obj);
      });
      this.newUpdateTime = this.newList[0].time;
    });
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
