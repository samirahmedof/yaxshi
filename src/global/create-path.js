const fs = require("fs");
const shell = require("shelljs");

const createPath = (name, type) => {
  let splitted = name.split("/");
  if (splitted[0] !== "src") {
    splitted.unshift("src");
  }
  let componentName = splitted[splitted.length - 1];
  let path = splitted.join("/");
  if (type) {
    path += `/${type}`;
  }
  const existingConfig = fs.existsSync(`./${path}`);
  if (!existingConfig) {
    if (path && path.length) {
      shell.mkdir("-p", path);
    }
    return {
      path,
      componentName,
    };
  } else {
    console.error("this path already exists");
    return false;
  }
};

module.exports = {
  createPath,
};
