const fs = require("fs");
const { scssText } = require("./../files/_scss");

const createScss = (path, componentName) => {
  let file = scssText(componentName);
  fs.writeFileSync(
    `./${path}/${componentName}.component.scss`,
    file,
    "utf8",
    function (err) {
      if (err) {
        console.error(err);
      }
    }
  );
};

module.exports = {
  createScss,
};
