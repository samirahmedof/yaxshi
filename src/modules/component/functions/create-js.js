var fs = require("fs");
const {kebabToPascal} = require('../../../global/kebab-pascal');

const createJs = (dir,path, componentName) => {
  fs.readFile(
    `${dir}/files/_component.js`,
    "utf8",
    function read(err, data) {
      if (err) {
        console.log(err);
      }
      let componentNamePascal = kebabToPascal(componentName);
      let file = data.replace(/component-name/g, componentName);
      file = file.replace(/ComponentName/g, componentNamePascal);
      fs.writeFile(
        `./${path}/${componentName}/${componentName}.component.js`,
        file,
        "utf8",
        function (err) {
            if(err) {
                console.error(err);
              }
        }
      );
    }
  );
};

module.exports = {
  createJs,
};
