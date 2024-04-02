<template>
  <div>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="全部记录" name="first"> </el-tab-pane>
        <el-tab-pane label="成功记录" name="second"> </el-tab-pane>
        <el-tab-pane label="失败记录" name="third"> </el-tab-pane>
        <el-tab-pane disabled>
          <slot slot="label">
            <span style="margin-left: 20px; margin-right: 10px">捕捉状态</span>
            <el-select
              v-model="params.istrue"
              placeholder=""
              :disabled="activeName == 'second' || activeName == 'third'"
              clearable
            >
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <span style="margin-left: 20px; margin-right: 10px">玩家id</span>
            <el-input v-model="params.playername" />

            <span style="margin-left: 20px; margin-right: 10px">捕捉球类</span>
            <el-select v-model="params.pokeball" clearable placeholder="">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <span style="margin-left: 20px; margin-right: 10px">捕捉时间</span>
            <el-date-picker
              v-model="params.captureTime"
              align="right"
              type="date"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              placeholder=""
            >
            </el-date-picker>

            <i
              class="el-icon-search"
              style="
                font-size: 20px;
                margin-left: 20px;
                margin-right: 20px;
                color: #3d7fff;
                cursor: pointer;
              "
              @click="handleSearch"
            />
          </slot>
        </el-tab-pane>
        <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{ 'text-align': 'center' }"
          :cell-style="cellStyle"
          align="center"
        >
          <el-table-column prop="playername" label="玩家ID" />
          <el-table-column prop="capturetime" label="捕捉时间" />
          <el-table-column prop="istrue" label="捕捉状态">
            <template slot-scope="scope">
              <div v-if="scope.row.istrue === '捕捉成功 T'">
                <i class="dotClass" style="background-color: #1677ff" />
                <span>成功</span>
              </div>
              <div v-else-if="scope.row.istrue === '捕捉失败 F'">
                <i class="dotClass" style="background-color: #ff3b30" />
                <span>失败</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="chinesename" label="精灵名称(中文)" />
          <el-table-column prop="englishname" label="精灵名称(英文)" />
          <el-table-column prop="isshiny" label="是否闪光">
            <template slot-scope="scope">
              <span v-if="scope.row.isshiny === '闪光'" style="color: #ffeb3b"
                >是</span
              >
              <span v-else-if="scope.row.isshiny === '非闪光'">否</span>
              <span v-else>{{ scope.row.isshiny }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="level" label="等级" />
          <el-table-column prop="health" label="血量" />
          <el-table-column prop="pokeball" label="捕捉球" />
          <el-table-column prop="abilityname" label="特性" />
        </el-table>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import { maxPokeCatchCount } from "@/api/api";
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      activeName: "first",
      tableData: [],
      total: 0,
      loading: false,
      bizId: "0",
      dialogFormVisible: false,
      params: {
        pageSize: 10,
        pageNum: 1,
        captureTime: null,
        pokeball: null,
        playername: null,
        isshiny: null,
        istrue: null,
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      options1: [
        {
          value: "1",
          label: "捕捉成功",
        },
        {
          value: "2",
          label: "捕捉失败",
        },
      ],
      options2: [
        {
          value: "精灵球",
          label: "精灵球",
        },
        {
          value: "超级球",
          label: "超级球",
        },
        {
          value: "高级球",
          label: "高级球",
        },
        {
          value: "大师球",
          label: "大师球",
        },
        {
          value: "等级球",
          label: "等级球",
        },
        {
          value: "月亮球",
          label: "月亮球",
        },
        {
          value: "友友球",
          label: "友友球",
        },
        {
          value: "甜蜜球",
          label: "甜蜜球",
        },
        {
          value: "狩猎球",
          label: "狩猎球",
        },
        {
          value: "沉重球",
          label: "沉重球",
        },
        {
          value: "速度球",
          label: "速度球",
        },
        {
          value: "重复球",
          label: "重复球",
        },
        {
          value: "巢穴球",
          label: "巢穴球",
        },
        {
          value: "计时球",
          label: "计时球",
        },
        {
          value: "捕网球",
          label: "捕网球",
        },
        {
          value: "潜水球",
          label: "潜水球",
        },
        {
          value: "豪华球",
          label: "豪华球",
        },
        {
          value: "治愈球",
          label: "治愈球",
        },
        {
          value: "黑暗球",
          label: "黑暗球",
        },
        {
          value: "纪念球",
          label: "纪念球",
        },
        {
          value: "竞赛球",
          label: "竞赛球",
        },
        {
          value: "先机球",
          label: "先机球",
        },
        {
          value: "诱饵球",
          label: "诱饵球",
        },
        {
          value: "公园球",
          label: "公园球",
        },
        {
          value: "贵重球",
          label: "贵重球",
        },
        {
          value: "GS球",
          label: "GS球",
        },
        {
          value: "究极球",
          label: "究极球",
        },
        {
          value: "梦境球",
          label: "梦境球",
        },
      ],
      test: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      maxPokeCatchCount(this.params).then((res) => {
        this.tableData = res.result.content.slice();
        this.total = res.result.totalSize;
        this.loading = false;
      });
    },
    reset() {
      this.params.pageSize = "10";
      this.params.pageNum = "1";
      this.params.captureTime = null;
      this.params.pokeball = null;
      this.params.playername = null;
      this.params.isshiny = null;
      this.params.istrue = null;
    },
    handleSearch() {
      this.getList();
    },
    handleClickTab(tab, event) {
      if (tab.$options.propsData.name === "first") this.reset();
      else if (tab.$options.propsData.name === "second") {
        this.reset();
        this.params.istrue = "1";
      } else if (tab.$options.propsData.name === "third") {
        this.reset();
        this.params.istrue = "2";
      }
      this.getList();
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.label === "玩家ID") {
        return { color: "#1677FF", textAlign: "center" };
      } else return { textAlign: "center" };
    },
  },
};
</script>

<style scoped>
::v-deep .el-tabs__nav {
  width: 100%;
}
::v-deep .el-tabs__item {
  font-family: YouShe;
  color: #666666;
}
::v-deep .el-tabs__item.is-top:last-child {
  float: right;
  color: #999999;
  margin-bottom: 10px;
}
::v-deep .el-color-picker__icon,
::v-deep .el-input,
::v-deep .el-textarea {
  display: inline-block;
  width: 120px;
}
::v-deep .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 140px;
}

::v-deep .el-table {
  font-family: "YouShe";
  color: #333333;
}

::v-deep .el-table th .cell {
  font-weight: normal;
}

.dotClass {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin-right: 10px;
  display: inline-block;
}
</style>
