const fs = require("fs");
const { mutationsText } = require("../files/_mutations");

const createMutations = (path) => {
  let file = mutationsText();
  fs.writeFileSync(`./${path}/mutations.js`, file, "utf8", function (err) {
    if (err) {
      console.error(err);
    }
  });
};

module.exports = {
  createMutations,
};
