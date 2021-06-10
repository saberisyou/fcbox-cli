/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 10:12:52
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-10 11:14:40
 * @Description: file content
 * @FilePath: \fcbox-cli\lib\log.js
 */
const chalk = require("chalk");
module.exports.titLog = async (content) => {
  console.log(chalk.hex("#fff566")(content));
};
module.exports.greyLog = (content) => {
  return chalk.grey(content);
};
module.exports.bgGreyLog = (content) => {
  return chalk.bgGrey.rgb(0, 0, 0).bold(` ${content} `) + " ";
};
module.exports.bgwhiteLog = (content) => {
  return chalk.bgWhite.rgb(0, 0, 0).bold(` ${content} `) + " ";
};
module.exports.bgGreenLog = (content) => {
  return chalk.bgGreen.rgb(0, 0, 0).bold(` ${content} `) + " ";
};
module.exports.whiteLog = (content) => {
  return chalk.rgb(255, 255, 255)(content);
};
module.exports.urlLog = (content) => {
  return chalk.hex("#36cfc9").underline(content);
};
