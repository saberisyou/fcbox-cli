/*
 * @Author: 乐祥孚
 * @Date: 2021-06-10 10:12:52
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-06-10 18:58:56
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
          name: `Vue-prev - ${chalk.grey("Create project with a layout-only ant-design-pro boilerplate, use together with umi block.")}`,
          short: "✅  Vue-prev",
          value: "vue-prev",
        },
        {
          name: `Vue-next - ${chalk.grey("Create project with a layout-only ant-design-pro boilerplate, use together with umi block.")}`,
          short: "✅  Vue-next",
          value: "vue-next",
        },
        {
          name: `React    - ${chalk.grey("Create project with a layout-only ant-design-pro boilerplate, use together with umi block.")}`,
          short: "✅  React",
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
  inquirer.prompt(promptList).then(async (answers) => {
    // console.log(answers); // 返回的结果
    try {
      await welcome();
      if (name) {
        await clone(`direct:https://github.com/saberisyou/fcbox-template#${answers.system}`, name, { clone: true });
      } else {
        await clone(`direct:https://github.com/saberisyou/fcbox-template#${answers.system}`, "./", { clone: true });
      }
      console.log("\n");
      aux(name);
    } catch (error) {
      console.log();
      console.log(error);
    }
  });
};
