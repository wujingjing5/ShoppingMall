module.exports = {
    // 关闭eslint校验功能（声明变量未使用不会报错）
    lintOnSave: false,
    devServer: {
        proxy: {
          '/api': {
            target: 'http://39.98.123.211',
            // changeOrigin: false,
            // secure: false,
            // pathRewrite: {
            //   '^/api': ''
            // }
          }
        }
      }
    
} 