/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 10:12:52
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-17 14:16:44
 * @Description: file content
 * @FilePath: \fcbox-cli\lib\create.js
 */
const clear = require("clear");
const inquirer = require("inquirer");
const tool = require("./tool");
const { welcome, aux } = tool;
const chalk = require("chalk");
const { clone } = require("./download");
const ora = require("ora");
// Overwrite package.json? (ynaxdH)
// ? Overwrite package.json? (ynaxdH)
//   y) overwrite
//   n) do not overwrite
//   a) overwrite this and all others
//   x) abort
//   d) show the differences between the old and the new
//   h) Help, list all options
// ✨ File Generate Done
module.exports = async (name) => {
  clear();
  const promptList = [
    {
      type: "list",
      message: "⚒️  Select the boilerplate type 请选择框架语言:",
      name: "system",
      choices: [
        {
          name: `Vue-prev - ${chalk.grey("创建基于 vue2.6+ 的项目")}`,
          short: "vue-prev",
          value: "vue-prev",
        },
        {
          name: `Vue-next - ${chalk.grey("创建基于 vue3 的项目")}`,
          short: "vue-next",
          value: "vue-next",
        },
        {
          name: `React    - ${chalk.grey("创建基于 React 的项目")}`,
          short: "react",
          value: "react",
        },
      ],
      default: "vue-perv",
    },
    // {
    //   type: "checkbox",
    //   message: "选择颜色:",
    //   name: "color",
    //   choices: ["red", "blur", "green", "yellow"],
    // },
    // {
    //   type: "input",
    //   message: "设置一个用户名:",
    //   name: "name",
    //   default: "test_user", // 默认值
    // },
    // {
    //   type: "input",
    //   message: "请输入手机号:",
    //   name: "phone",
    //   validate: function(val) {
    //     if (val.match(/\d{11}/g)) {
    //       // 校验位数
    //       return val;
    //     }
    //     return "请输入11位数字";
    //   },
    // },
  ];
  await welcome();
  inquirer.prompt(promptList).then(async (answers) => {
    // console.log(answers); // 返回的结果
    try {
      if (name) {
        await clone(`github:saberisyou/fcbox-template#${answers.system}`, name);
      } else {
        await clone(`github:saberisyou/fcbox-template#${answers.system}`, "./");
      }
      console.log("\n");
      aux(name);
    } catch (error) {
      console.log();
      console.log(error);
    }
  });
};
