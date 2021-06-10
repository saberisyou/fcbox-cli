/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 10:12:52
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-10 18:16:56
 * @Description: file content
 * @FilePath: \fcbox-cli\lib\init.js
 */

const { clone } = require("./download");
const { welcome } = require("./tool");
const { git } = require("../package.json");

module.exports = async (name) => {
  try {
    await welcome();
    if (name) {
      await clone(git, name);
    } else {
      await clone("github:saberisyou/fcbox-template#master", "./");
    }
    console.log("\n");
  } catch (error) {
    console.log();
    console.log(error);
  }
};
