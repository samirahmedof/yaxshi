const {addComponent} = require("../component");
const {addModel} = require("../models");
const {addStore} = require("../store");
const createFullModule = (name) => {
    addComponent(name);
    addModel(name);
    addModel(name,true);
    addStore(name, ['Get', 'Set', 'Update', 'Delete', 'GetById']);
};

module.exports = {
    createFullModule,
};
