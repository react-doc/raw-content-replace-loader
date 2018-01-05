<div align="center">
  <img width="200" height="200"
    src="https://cdn3.iconfinder.com/data/icons/lexter-flat-colorfull-file-formats/56/raw-256.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Raw Content Replace Loader</h1>
  <p>Replaces the specified path file contents.</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev raw-content-replace-loader
```

<h2 align="center">Usage</h2>

Use the loader either via your webpack config, CLI or inline.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        use: [
          {
            loader: require.resolve('raw-tree-replace-loader'),
            options: {
              include: /rdoc\.tree\.data\.json$/, // 检查包含的文件名字
              extensions: /\.md/,
              directoryTrees: { // 指定目录生成目录树，json
                dir: cmd.markdownDirs,
                mdconf: true,
                extensions: /\.md/,
              }
            }
          }
        ]
      }
    ]
  }
}
```