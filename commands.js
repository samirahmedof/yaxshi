#!/usr/bin/env node
const {program} = require("commander");
const {prompt} = require("inquirer");
const {addComponent} = require("./src/modules/component");
const {addModel} = require("./src/modules/models");
const {addStore} = require("./src/modules/store");

const storeCrud = [
    {
        type: 'checkbox',
        name: 'store',
        message: 'Select CRUD methods',
        choices: [
            {
                key: 1,
                value: 'Get',
                checked: true,
            },
            {
                key: 2,
                value: 'Set',
                checked: true,
            },
            {
                key: 3,
                value: 'Update',
                checked: true,
            },
            {
                key: 4,
                value: 'Delete',
                checked: true,
            },
            {
                key: 5,
                value: 'GetById',
                checked: true,
            },

        ],
    },
]
program.version("1.0.7").description("Custom Cli");


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
    .option('-c, --crud')
    .action((name, opt) => {
        if (opt.crud) {
            prompt(storeCrud).then(res => {
                addStore(name, res.store);
            })
        } else {
            addStore(name);
        }
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
