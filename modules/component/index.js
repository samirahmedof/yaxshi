var fs = require("fs");

const addComponent = (componentName) => {
  fs.mkdir(`./${componentName}`, function (err) {
    if (err) {
      throw err;
    }
  });
  fs.readFile("./modules/component/_component.scss",'utf8', function read(err, data) {
    if (err) {
      throw err;
    }
    let file = data.replace(/ComponentName/g, componentName);
    fs.writeFile(`./${componentName}/${componentName}.component.scss`, file, "utf8", function (err) {});
  });
  fs.readFile("./modules/component/_component.js",'utf8', function read(err, data) {
    if (err) {
      throw err;
    }
    let file = data.replace(/ComponentName/g, componentName);
    fs.writeFile(`./${componentName}/${componentName}.component.js`, file, "utf8", function (err) {});
  });
  fs.readFile("./modules/component/_component.vue",'utf8', function read(err, data) {
    if (err) {
      throw err;
    }
    let file = data.replace(/ComponentName/g, componentName);
    fs.writeFile(`./${componentName}/${componentName}.component.vue`, file, "utf8", function (err) {});
  });
};

module.exports = {
  addComponent,
};
