<template>
  <div>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
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
            <span style="margin-left: 20px; margin-right: 10px; color: #000000"
              >玩家id</span
            >
            <el-input v-model="params.playername" placeholder="请输入" />

            <span style="margin-left: 20px; margin-right: 10px; color: #000000"
              >查询日期</span
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
      loading: false,
    };
  },
  created() {
    //this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      serverOnlineQuitMsg(params).then((res) => {
        this.tableData = res.data.items.slice();
        this.total = res.data.total;
        this.loading = false;
      });
    },
    getSummaries(param) {
      const sums = [];
      sums[0] = "文件数：" + this.total;
      return sums;
    },
    handleCheck(row) {
      getFileInfo(row.id).then((res) => {
        this.fileInfo = res.data;
      });
      this.dialogFormVisible = true;
    },
    handleInstall(row) {
      installFile(row.id);
    },
    handleDelete(row) {
      deleteFile(row.id).then(() => {
        this.$message("删除成功");
        this.getList();
      });
    },
    handleBind(row) {
      let fileIds = [];
      this.tableData.forEach((file) => {
        fileIds.push(file.id);
      });
      bindFile({ bizId: this.bizId, fileIds: fileIds }).then((res) => {
        this.$message("绑定成功");
      });
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
