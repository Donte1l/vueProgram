const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    port: 8800,
    open: true,
    proxy: "http://43.140.243.230:8888",
    //proxy: "http://localhost:8888",
  },
});
