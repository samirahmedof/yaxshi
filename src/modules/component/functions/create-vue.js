const fs = require("fs");
const { vueText } = require("./../files/_vue");

const createVue = (path, componentName) => {
  let file = vueText(componentName);
  fs.writeFileSync(
    `./${path}/${componentName}.cmp.vue`,
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
  createVue,
};
