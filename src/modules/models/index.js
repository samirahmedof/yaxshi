const { createPath } = require("../../global/create-path");
const { createModel } = require("./functions/create-model");

const addModel = (name, p) => {
  let res = createPath(name, "models");
  if (res) {
    createModel(res.path, res.componentName);

    if (p) {
      let post = res.componentName + "-post";
      createModel(res.path, post);
    }
  }
};

module.exports = {
  addModel,
};
