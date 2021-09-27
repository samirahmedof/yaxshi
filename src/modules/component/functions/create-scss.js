var fs = require("fs");

const createScss = (dir,path, componentName) => {
  fs.readFile(
    `${dir}/files/_component.scss`,
    "utf8",
    function read(err, data) {
      if (err) {
        console.log(err);
      }
      let file = data.replace(/component-name/g, componentName);
      fs.writeFile(
        `./${path}/${componentName}/${componentName}.component.scss`,
        file,
        "utf8",
        function (err) {
          if (err) {
            console.error(err);
          }
        }
      );
    }
  );
};

module.exports = {
  createScss,
};
