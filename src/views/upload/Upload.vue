<template>
  <div>
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/list' }">
          文件管理
        </el-breadcrumb-item>
        <el-breadcrumb-item> 上传文件 </el-breadcrumb-item>
      </el-breadcrumb>
      <div style="display: flex; justify-content: center">
        <el-upload
          ref="upload"
          :action="upload.url"
          :disabled="upload.isUploading"
          :on-progress="handleFileUploadProgress"
          :on-success="handleFileSuccess"
          :auto-upload="true"
          :show-file-list="true"
          :file-list="fileList"
          drag
          style="margin-top: 10px"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      // 导入参数
      upload: {
        // 是否显示弹出层
        open: false,
        // 是否禁用上传
        isUploading: false,
        // 设置上传的请求头部(没有登录模块，暂时注释掉)
        //headers: {Authorization: "Bearer " + getToken()},
        // 上传的地址
        url: "/dev-api/files/upload",
      },
      fileList: [],
    };
  },
  methods: {
    // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
      this.upload.isUploading = true;
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.upload.open = false;
      this.upload.isUploading = false;
      this.$alert(
        "<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>" +
          response.msg +
          "</div>",
        "上传结果",
        { dangerouslyUseHTMLString: true }
      );
    },
  },
};
</script>

<style scoped></style>
