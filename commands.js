#!/usr/bin/env node
const { program } = require("commander");
// const {prompt} = require("inquirer");
const {addComponent} = require('./src/modules/component');

program.version("1.0.0").description("Custom Cli");

program
  .command("component <name>")
  .alias("cmp")
  .description("create component")
  .action((name) => {
    addComponent(name);
  });

program.parse(process.argv);
