var fs = require("fs");
var shell = require("shelljs");
const { createVue } = require("./functions/create-vue");
const { createScss } = require("./functions/create-scss");
const { createJs } = require("./functions/create-js");


const addComponent = (name) => {
  let splitted = name.split("/");
  let componentName = splitted[splitted.length - 1];
  splitted.splice(-1, 1);
  let path = splitted.join("/");
  const existingConfig = fs.existsSync(`./${path}/${componentName}`);
  
  if (!existingConfig) {
    if (path && path.length) {
      shell.mkdir("-p", path);
    }
    fs.mkdir(`./${path}/${componentName}`, function (err) {
      if (err) {
        console.error(err);
      }
    });
    const dir = __dirname;
    createVue(dir, path, componentName);
    createScss(dir, path, componentName);
    createJs(dir, path, componentName);
  } else {
    console.error("this path already exists");
  }
};

module.exports = {
  addComponent,
};
