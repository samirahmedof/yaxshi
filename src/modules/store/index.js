const { createPath } = require("../../global/create-path");
const { createActions } = require("./functions/create-actions");
const { createIndex } = require("./functions/create-index");
const { createMutations } = require("./functions/create-mutations");
const { createState } = require("./functions/create-state");

const addStore = (name) => {
  let res = createPath(name,'store');
  if (res) {
    createState(res.path);
    createIndex(res.path);
    createMutations(res.path);
    createActions(res.path);
  }
};

module.exports = {
  addStore,
};
