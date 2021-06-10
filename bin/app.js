#!/usr/bin/env node
// console.log("这是一个npmcli命令");

const program = require("commander");
program.version(require("../package.json").version);

program.command("init [name]").description("初始化fcbox脚手架").action(require("../lib/init"));
program.command("create <name>").description("创建fcbox项目").action(require("../lib/create"));

program.parse(process.argv);
