<template>
  <div>
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/list' }">
          文件管理
        </el-breadcrumb-item>
        <el-breadcrumb-item> 文件列表 </el-breadcrumb-item>
      </el-breadcrumb>
      <el-table
        :summary-method="getSummaries"
        show-summary
        v-loading="loading"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="name" label="文件名" />
        <el-table-column prop="module" label="分类模块名" />
        <el-table-column prop="size" label="文件大小(kb)" />
        <el-table-column prop="uploadTime" label="上传时间" />
        <el-table-column
          label="操作"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleCheck(scope.row)"
            >
              查看
            </el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-download"
              @click="handleInstall(scope.row)"
            >
              下载
            </el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog :visible.sync="dialogFormVisible">
      <el-descriptions title="文件信息">
        <el-descriptions-item label="文件id">{{
          fileInfo.id
        }}</el-descriptions-item>
        <el-descriptions-item label="分类模块名">{{
          fileInfo.module
        }}</el-descriptions-item>
        <el-descriptions-item label="文件地址">{{
          fileInfo.url
        }}</el-descriptions-item>
        <el-descriptions-item label="文件名称">{{
          fileInfo.name
        }}</el-descriptions-item>
        <el-descriptions-item label="文件大小(kb)">{{
          fileInfo.size
        }}</el-descriptions-item>
        <el-descriptions-item label="上传时间">{{
          fileInfo.uploadTime
        }}</el-descriptions-item>
      </el-descriptions>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false"
          >返回</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getFileList, getFileInfo, deleteFile } from "@/api/MinioApi";
import { installFile } from "@/api/FileHandle";
import { bindFile, deleteFileByBizId } from "@/api/BizApi";
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      total: 1,
      tableData: [],
      fileInfo: {},
      // 以下为测试数据
      // tableData: [
      //   {
      //     name: "a文件",
      //     module: "a模块",
      //     size: "1024",
      //     uploadTime: "2024-03-27",
      //   },
      // ],
      // fileInfo: {
      //   id: "001",
      //   name: "a文件",
      //   module: "a模块",
      //   size: "1024",
      //   uploadTime: "2024-03-27",
      //   url: "http://192.168.1.100:9000/a文件",
      // },
      loading: false,
      bizId: "0",
      dialogFormVisible: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      getFileList().then((res) => {
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

<style scoped></style>
