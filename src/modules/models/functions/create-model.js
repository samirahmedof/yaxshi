const fs = require("fs");
const { modelText } = require("../files/_model");

const createModel = (path,cmp) => {
  let file = modelText(cmp);
  fs.writeFileSync(
    `./${path}/${cmp}.model.js`,
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
  createModel,
};
