var fs = require("fs");

const createVue = (dir,path, componentName) => {
  fs.readFile(
    `${dir}/files/_component.vue`,
    "utf8",
    function read(err, data) {
      if (err) {
        console.log(err);
      }
      let file = data.replace(/component-name/g, componentName);
      fs.writeFile(
        `./${path}/${componentName}/${componentName}.component.vue`,
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
  createVue,
};
