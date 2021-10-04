#!/usr/bin/env node
const { program } = require("commander");
const { addComponent } = require("./src/modules/component");
const { addModel } = require("./src/modules/models");
const { addStore } = require("./src/modules/store");

program.version("1.0.0").description("Custom Cli");

program
  .command("component <name>")
  .alias("cmp")
  .description("create component")
  .action((name) => {
    addComponent(name);
  });

program
  .command("store <name>")
  .alias("str")
  .description("create store")
  .action((name) => {
    addStore(name);
  });

program
  .command("model <name>")
  .alias("mdl")
  .description("create model")
  .option("-p ,--post")
  .action((name, opt) => {
    addModel(name, opt.post);
  });


program.parse(process.argv);
