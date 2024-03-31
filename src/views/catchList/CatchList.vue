<template>
  <div>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="全部记录" name="first">
          <el-table v-loading="loading" :data="tableData1" style="width: 100%">
            <el-table-column prop="playername" label="玩家ID" />
            <el-table-column prop="chinesename" label="捕捉时间" />
            <el-table-column prop="istrue" label="捕捉状态" />
            <el-table-column prop="chinesename" label="精灵名称" />
            <el-table-column prop="isshiny" label="是否闪光" />
            <el-table-column prop="level" label="等级" />
            <el-table-column prop="health" label="血量" />
            <el-table-column prop="pokeball" label="捕捉球" />
            <el-table-column prop="uploadTime" label="特性" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="成功记录" name="second">
          <el-table v-loading="loading" :data="tableData2" style="width: 100%">
            <el-table-column prop="playername" label="玩家ID" />
            <el-table-column prop="chinesename" label="捕捉时间" />
            <el-table-column prop="istrue" label="捕捉状态" />
            <el-table-column prop="chinesename" label="精灵名称" />
            <el-table-column prop="isshiny" label="是否闪光" />
            <el-table-column prop="level" label="等级" />
            <el-table-column prop="health" label="血量" />
            <el-table-column prop="pokeball" label="捕捉球" />
            <el-table-column prop="uploadTime" label="特性" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="失败记录" name="third">
          <el-table v-loading="loading" :data="tableData3" style="width: 100%">
            <el-table-column prop="playername" label="玩家ID" />
            <el-table-column prop="chinesename" label="捕捉时间" />
            <el-table-column prop="istrue" label="捕捉状态" />
            <el-table-column prop="chinesename" label="精灵名称" />
            <el-table-column prop="isshiny" label="是否闪光" />
            <el-table-column prop="level" label="等级" />
            <el-table-column prop="health" label="血量" />
            <el-table-column prop="pokeball" label="捕捉球" />
            <el-table-column prop="uploadTime" label="特性" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane disabled>
          <slot slot="label">
            <span style="margin-left: 20px; margin-right: 10px; color: #000000"
              >捕捉状态</span
            >
            <el-select
              v-model="params.istrue"
              placeholder="请选择"
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

            <span style="margin-left: 20px; margin-right: 10px; color: #000000"
              >玩家id</span
            >
            <el-input v-model="params.playername" placeholder="请输入" />

            <span style="margin-left: 20px; margin-right: 10px; color: #000000"
              >捕捉球类</span
            >
            <el-select v-model="params.pokeball" placeholder="请选择" clearable>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <span style="margin-left: 20px; margin-right: 10px; color: #000000"
              >捕捉时间</span
            >
            <el-date-picker
              v-model="params.captureTime"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>

            <i
              class="el-icon-search"
              style="
                font-size: 20px;
                margin-left: 20px;
                margin-right: 20px;
                color: #3d7fff;
              "
              @click="handleSearch"
            />
          </slot>
        </el-tab-pane>
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
      total: 1,
      tableData1: [],
      tableData2: [],
      tableData3: [],
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
    };
  },
  created() {
    //this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      maxPokeCatchCount().then((res) => {
        this.tableData = res.data.items.slice();
        this.total = res.data.total;
        this.loading = false;
      });
    },
    handleSearch() {
      if (activeName === "second") this.params.istrue = "1";
      else if (activeName === "third") this.params.istrue = "2";
    },
    handleClickTab(tab, event) {
      if (tab.$options.propsData.name === "second") this.params.istrue = "1";
      else if (tab.$options.propsData.name === "third")
        this.params.istrue = "2";
    },
  },
};
</script>

<style scoped>
::v-deep .el-tabs__nav {
  width: 100%;
}
::v-deep .el-tabs__item.is-top:last-child {
  float: right;
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
  width: 120px;
}
</style>
