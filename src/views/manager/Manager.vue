<template>
  <el-container style="background-color: rgba(2, 0, 77, 1); height: 100vh">
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
        height: isBigRatio ? '61vh' : '92vh',
      }"
    >
      <div class="sideBox">
        <CircleInfo
          :percentage="percentage"
          :num="sumResult.allServerCatchPokeCount"
          :target="serverInfoCheckResult.maxcount"
        />
        <LittleInfoGroup :result="sumResult" />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="mainBox">
        <SystemInfo :result="serverResult" />
        <MiddleInfoGroup
          :result="serverResult"
          :serverInfoCheckResult="serverInfoCheckResult"
        />
        <PlayerList
          :playerList="playerListFilter"
          :updateTime="playerListUpdateTime"
        />
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
import {
  sumPokeCount,
  timeGetServerInfo,
  maxPokeCatchCount,
  serverInfoCheck,
} from "@/api/api";

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
      serverInfoCheckResult: {
        maxcount: "100",
      },
      // 定时器
      pollingST: null,
      playerListUpdateTime: null,
    };
  },
  // mounted() {
  //   const m = detectZoom();
  //   console.log("detectZoom", m);
  //   console.log("宽度", window.screen.width * window.devicePixelRatio);
  //   console.log("高度", window.screen.height * window.devicePixelRatio);
  //   if (window.screen.width * window.devicePixelRatio >= 3840) {
  //     switch (m) {
  //       // 4k屏时屏幕缩放比为100%
  //       case 100:
  //         document.body.style.zoom = 100 / 50;
  //         break;
  //       // 4k屏时屏幕缩放比为125%
  //       case 125:
  //         document.body.style.zoom = 100 / 62.5;
  //         break;
  //       // 4k屏时屏幕缩放比为150%
  //       case 150:
  //         document.body.style.zoom = 100 / 75;
  //         break;
  //       // 4k屏时屏幕缩放比为175%
  //       case 175:
  //         console.log("haha");
  //         document.body.style.zoom = 1.5;
  //         break;
  //       case 219:
  //         document.body.style.zoom = 140 / 100;
  //         break;
  //       // 4k屏时屏幕缩放比为225%
  //       case 225:
  //         document.body.style.zoom = 100 / 112.485;
  //         break;
  //
  //       default:
  //         break;
  //     }
  //   } else {
  //     document.body.style.zoom = 155 / Number(m);
  //   }
  //   window.screen.width * window.devicePixelRatio > 3840
  //     ? (this.isBigRatio = true)
  //     : (this.isBigRatio = false);
  // },
  created() {
    // 调用轮询
    this.polling();
  },
  methods: {
    polling() {
      this.work().then((res) => {
        this.pollingST = setTimeout(() => {
          clearTimeout(this.pollingST);
          this.polling();
        }, 3000);
      });
    },
    work() {
      sumPokeCount().then((res) => {
        this.sumResult = res.result;
        serverInfoCheck().then((res) => {
          this.serverInfoCheckResult = res.result;
          this.percentage = parseFloat(
            (
              (parseInt(this.sumResult.allServerCatchPokeCount) /
                parseInt(this.serverInfoCheckResult.maxcount)) *
              100
            ).toFixed(1)
          );
        });
      });

      timeGetServerInfo().then((res) => {
        this.serverResult = res.result;

        const dateObject = new Date(res.date);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // 注意：getMonth()返回的是从0开始的月份索引
        const day = String(dateObject.getDate()).padStart(2, "0");
        const hours = String(dateObject.getHours()).padStart(2, "0");
        const minutes = String(dateObject.getMinutes()).padStart(2, "0");
        const seconds = String(dateObject.getSeconds()).padStart(2, "0");
        this.playerListUpdateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        this.playerListFilter = this.serverResult.playerList
          .slice(0, 48)
          .concat(Array(48 - this.serverResult.playerList.length).fill(""));
      });

      maxPokeCatchCount({ pageSize: "8", pageNum: "1" }).then((res) => {
        this.newList = [];
        this.catchResult = res.result;
        const dateObject = new Date(res.date);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // 注意：getMonth()返回的是从0开始的月份索引
        const day = String(dateObject.getDate()).padStart(2, "0");
        const hours = String(dateObject.getHours()).padStart(2, "0");
        const minutes = String(dateObject.getMinutes()).padStart(2, "0");
        const seconds = String(dateObject.getSeconds()).padStart(2, "0");
        this.newUpdateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        this.catchResult.content.slice(0, 8).forEach((item) => {
          let obj = {
            content: "",
            time: "",
          };
          obj.content =
            item.playername +
            " 捕捉了 " +
            item.chinesename +
            " 使用 " +
            item.pokeball +
            " ";
          if (item.istrue === "捕捉成功 T") obj.content += "成功！";
          else obj.content += "失败...";
          obj.time = item.capturetime;
          this.newList.push(obj);
        });
      });

      return Promise.resolve();
    },
  },
  destroyed() {
    clearTimeout(this.pollingST);
  },
};
</script>

<style scoped lang="less">
.head {
  height: 8vh;
}
.sideBox {
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: nowrap;
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

.el-header {
  padding: 0;
  margin: 0;
}
.el-main {
  padding: 0;
  margin: 0;
}
</style>
<style>
html {
  rem: 10px;
}
</style>
