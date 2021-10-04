const { createVue } = require("./functions/create-vue");
const { createScss } = require("./functions/create-scss");
const { createJs } = require("./functions/create-js");
const { createPath } = require("../../global/create-path");

const addComponent = (name) => {
  let res = createPath(name);
  if (res) {
    createVue(res.path, res.componentName);
    createScss(res.path, res.componentName);
    createJs(res.path, res.componentName);
  }
};

module.exports = {
  addComponent,
};
