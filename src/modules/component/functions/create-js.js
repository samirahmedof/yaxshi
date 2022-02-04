const fs = require("fs");
const {jsText} = require("../files/_js");

const createJs = (path, componentName) => {
    let file = jsText(componentName);
    fs.writeFileSync(
        `./${path}/${componentName}.component.js`,
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
    createJs,
};
