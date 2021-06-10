/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 15:48:56
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-10 15:50:29
 * @Description: file content
 * @FilePath: \fcbox-cli\lib\tool.js
 */
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const { titLog, greyLog, whiteLog, urlLog, bgGreenLog, bgGreyLog } = require("./log");
const begin = Date.now();
//打印欢迎界面
const welcome = async () => {
  clear();
  const data = await figlet("FcboX - CLI ", "slant");
  titLog(data);
  console.log(bgGreyLog("INIT") + greyLog(`Hello everyone, welcome to fcbox-cli`));
  console.log(greyLog(`The current scaffold version is ${whiteLog("v" + require("../package.json").version)}. Please check whether the previous version is the latest.`));
  console.log("");
};

//打印下载成功页面
const aux = async (name) => {
  const end = Date.now();
  const timeSpent = end - begin + "ms";
  console.log(bgGreenLog("DONE") + chalk.green(name + " Compiled successfully in " + timeSpent));
  console.log();
  console.log(" Please pay attention to the following address : ");
  console.log(whiteLog("  - Github: ") + urlLog("https://www.baidu.com"));
  console.log(whiteLog("  - Gitlab: ") + urlLog("http://git.fcbox.com"));
  console.log("");
};

module.exports.welcome = welcome;
module.exports.aux = aux;
