const fs = require("fs");
const { stateText } = require("../files/_state");

const createState = (path) => {
  let file = stateText();
  fs.writeFileSync(
    `./${path}/state.js`,
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
  createState,
};
