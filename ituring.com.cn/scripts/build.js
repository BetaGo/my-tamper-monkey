const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const config = require("../webpack.config");

const metaFilePath = path.resolve(__dirname, "../tampmonkey.meta.js");
const tampmonkeyMeta = fs.readFileSync(metaFilePath).toString();

const buildFilePath = path.resolve(__dirname, "../dist/main.js");

webpack(config).run((err, stats) => {
  if (err) {
    console.error(err);
  } else {
    const buildFile = fs.readFileSync(buildFilePath).toString();
    const data = tampmonkeyMeta + "\n" + buildFile;
    fs.writeFileSync(buildFilePath, data);
  }
});
