const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      ["/dev-api"]: {
        target: `http://localhost:9090`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + "/dev-api"]: "",
        },
      },
    },
  },
});
