var fs = require("fs");
const {kebabToPascal} = require('./../../../global/kebab-pascal');

const createTs = (dir,path, componentName) => {
  fs.readFile(
    `${dir}/files/_component.ts`,
    "utf8",
    function read(err, data) {
      if (err) {
        console.log(err);
      }
      let componentNamePascal = kebabToPascal(componentName);
      let file = data.replace(/component-name/g, componentName);
      file = file.replace(/ComponentName/g, componentNamePascal);
      fs.writeFile(
        `./${path}/${componentName}/${componentName}.component.ts`,
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
  createTs,
};
