/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 10:12:52
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-16 18:26:47
 * @Description: file content
 * @FilePath: \fcbox-cli\lib\download.js
 */
const { promisify } = require("util");
const child_process = require("child_process");
const chalk = require("chalk");
const path = require("path");
const rimraf = require("rimraf");
const download = promisify(require("download-git-repo"));
const ora = require("ora");
const { name, version } = require("../package.json");
module.exports.clone = async (repo, desc) => {
  const dir = path.join(process.cwd(), desc); //这里可以自定义下载的地址
  rimraf.sync(dir, {});
  console.log(`✨ Start creating project: ${dir}`);
  const loading = ora({
    text: `Fetching packages`,
    spinner: {
      interval: 80,
      frames: ["⌛️", "⌛️⌛️", "⌛️⌛️⌛️", "⌛️⌛️⌛️⌛️"],
    },
  });
  loading.start();
  try {
    await download(repo, desc);
    loading.stop();
    //原生git clone
    //   child_process.execSync(`git clone ${repo} ${desc}`);
  } catch (error) {
    loading.fail(chalk.red("request failed!"));
    console.log(error);
  }
};
