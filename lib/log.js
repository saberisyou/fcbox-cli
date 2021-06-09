const clear = require("clear");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
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
