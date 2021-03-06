const fs = require("fs");
const {actionsText} = require("../files/_actions");

const createActions = (path, name, crud) => {
    let file = actionsText(crud, name);
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
