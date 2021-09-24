const { program } = require("commander");
const {addComponent} = require('./modules/component');

program.version("1.0.0").description("Custom Cli");

program
  .command("component <nam>")
  .alias("c")
  .description("create component")
  .action((name) => {
    addComponent(name);
  });

program.parse(process.argv);
