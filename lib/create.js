const clear = require("clear");
const inquirer = require("inquirer");
const { welcome } = require("./init");
const init = require("./init");

module.exports = async (name) => {
  clear();
  const promptList = [
    {
      type: "list",
      message: "🏠 请选择框架语言:",
      name: "systemLanguage",
      choices: ["vue2", "vue3", "react"],
      default: "vue2",
      filter: function(val) {
        // 使用filter将回答变为小写
        return val.toLowerCase();
      },
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
  inquirer.prompt(promptList).then((answers) => {
    console.log(answers); // 返回的结果
    welcome();
    init();
  });
};
