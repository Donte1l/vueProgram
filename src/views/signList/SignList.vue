<template>
  <div>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="全部记录" name="first">
          <el-table v-loading="loading" :data="tableData1" style="width: 100%">
            <el-table-column prop="playername" label="玩家ID" />
            <el-table-column prop="createtime" label="操作时间" />
            <el-table-column prop="oper" label="操作状态" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="上线记录" name="second">
          <el-table v-loading="loading" :data="tableData2" style="width: 100%">
            <el-table-column prop="playername" label="玩家ID" />
            <el-table-column prop="createtime" label="操作时间" />
            <el-table-column prop="oper" label="操作状态" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="下线记录" name="third">
          <el-table v-loading="loading" :data="tableData3" style="width: 100%">
            <el-table-column prop="playername" label="玩家ID" />
            <el-table-column prop="createtime" label="操作时间" />
            <el-table-column prop="oper" label="操作状态" />
          </el-table>
        </el-tab-pane>
        <el-tab-pane disabled>
          <slot slot="label">
            <span style="margin-left: 20px; margin-right: 10px">玩家id</span>
            <el-input v-model="params.playername" />

            <span style="margin-left: 20px; margin-right: 10px">查询日期</span>
            <el-date-picker
              v-model="params.captureTime"
              align="right"
              type="date"
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
                cursor: pointer;
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
import { serverOnlineQuitMsg } from "@/api/api";
export default {
  name: "Upload",
  data() {
    return {
      activeName: "first",
      tableData1: [],
      tableData2: [],
      tableData3: [],
      params: {
        pageSize: "10",
        pageNum: "1",
        captureTime: null,
        playername: null,
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
      loading: false,
    };
  },
  created() {
    //this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      serverOnlineQuitMsg(this.params).then((res) => {
        this.tableData = res.data.items.slice();
        this.total = res.data.total;
        this.loading = false;
      });
    },
    handleSearch() {
      //this.getList();
    },
    handleClickTab(tab, event) {
      if (tab.$options.propsData.name === "first") this.reset();
      else if (tab.$options.propsData.name === "second") {
        this.reset();
        //this.params.istrue = "1";
      } else if (tab.$options.propsData.name === "third") {
        this.reset();
        //this.params.istrue = "2";
      }
      //this.getList();
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
  display: inline-block;
  width: 140px;
}

::v-deep .el-table {
  font-family: "YouShe";
  color: #333333;
}

::v-deep .el-table th .cell {
  font-weight: normal;
}
</style>
