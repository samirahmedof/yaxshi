const fs = require("fs");
const { actionsText } = require("../files/_actions");

const createActions = (path) => {
  let file = actionsText();
  fs.writeFileSync(
    `./${path}/actions.js`,
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
  createActions,
};
