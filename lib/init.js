const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const inquirer = require("inquirer");

const { clone } = require("./download");
var begin = Date.now();

const titLog = async (content) => {
  console.log(chalk.hex("#fff566")(content));
};
const greyLog = (content) => {
  return chalk.grey(content);
};
const bgGreyLog = (content) => {
  return chalk.bgGrey.rgb(0, 0, 0).bold(` ${content} `) + " ";
};
const bgwhiteLog = (content) => {
  return chalk.bgWhite.rgb(0, 0, 0).bold(` ${content} `) + " ";
};
const bgGreenLog = (content) => {
  return chalk.bgGreen.rgb(0, 0, 0).bold(` ${content} `) + " ";
};
const whiteLog = (content) => {
  return chalk.rgb(255, 255, 255)(content);
};
const urlLog = (content) => {
  return chalk.hex("#36cfc9").underline(content);
};
// const path = require("path");
// const rimraf = require("rimraf");
// const dir = path.join(process.cwd(), "test"); //这里可以自定义下载的地址
// rimraf.sync(dir, {});

module.exports = async (name) => {
  try {
    await clone(`github:saberisyou/test`, name);
    console.log("\n");
  } catch (error) {
    console.log();
    console.log(error);
  }
};

const aux = async () => {
  console.log(" Please pay attention to the following address : ");
  console.log(whiteLog("  - Gitube: ") + urlLog("https://www.baidu.com"));
  console.log(whiteLog("  - Gitlab: ") + urlLog("http://git.fcbox.com"));
  console.log("\n");
  const end = Date.now();
  const timeSpent = end - begin + "ms";
  console.log(
    bgGreenLog("DONE") +
      chalk.green(name + " Compiled successfully in " + timeSpent)
  );
};

module.exports.welcome = async () => {
  //打印欢迎界面
  clear();
  const data = await figlet("fcbox-cli", "Alligator");
  titLog(data);
  console.log("\n");
  console.log(
    bgGreyLog("INIT") +
      greyLog("Hello everyone, the version of fcbox-cli is : ") +
      whiteLog("v" + require("../package.json").version)
  );
  console.log("\n");
};
