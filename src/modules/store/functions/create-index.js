const fs = require("fs");
const { indexText } = require("../files/_index");

const createIndex = (path) => {
  let file = indexText();
  fs.writeFileSync(
    `./${path}/index.js`,
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
  createIndex,
};
