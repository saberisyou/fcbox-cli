#!/usr/bin/env node
// console.log("这是一个npmcli命令");

const program = require("commander");
program.version(require("../package.json").version);

program
  .command("init <name>")
  .description("初始化项目")
  .action((name) => {
    require("../lib/init")(name);
  });
program
  .command("create <name>")
  .description("创建项目")
  .action((name) => {
    require("../lib/create")(name);
  });

program.parse(process.argv);
