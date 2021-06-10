/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 10:12:52
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-10 17:21:48
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
  console.log(`⌛️ [1/4] Resolving packages...`);
  console.log(`⌛️ [2/4] Fetching packages...`);
  const loading = ora(`Fetching...`);
  loading.start();
  try {
    await download(repo, desc);
    loading.succeed(chalk.green(`Finished!`));
    console.log(`⌛️ [3/4] Linking dependencies...`);
    console.log(`⌛️ [4/4] Building fresh packages...`);
    //原生git clone
    //   child_process.execSync(`git clone ${repo} ${desc}`);
  } catch (error) {
    loading.fail(chalk.red("request failed!"));
    console.log(error);
  }
};
