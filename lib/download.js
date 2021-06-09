const { promisify } = require("util");
const child_process = require("child_process");
const chalk = require("chalk");
module.exports.clone = async (repo, desc) => {
  const download = promisify(require("download-git-repo"));
  const ora = require("ora");
  console.log(`🚀 创建项目: ${desc}`);
  const process = ora(chalk.grey(`下载中...${repo}`));
  process.start();
  await download(repo, desc);
  //原生git clone
  //   child_process.execSync(`git clone ${repo} ${desc}`);
  process.succeed(`🦄 下载完成!`);
};
