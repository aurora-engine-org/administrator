const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // ./ 定义build静态资源导入路径前缀，默认没有 ./导入会导致 aurora 加载静态资源失败
  // 多个vue项目 此处需要修改对应的目录前缀，否则无法正确读取静态资源
  publicPath:'./test',
  //配置webpack 构建输出到 项目定义的 静态资源路径
  // 单个vue项目可以直接build到静态资源路径下，多个vue项目请分别创建文件夹导入到 aurora 静态资源目录下
  outputDir: '../static/test'
})
