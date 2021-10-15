let fs = require("fs");
let shell = require("shelljs");
const {createModule} = require("./functions/create-module");


const addModule = (name, res) => {
    let splitted = name.split("/");
    if (splitted[0] !== 'src') {
        splitted.unshift('src');
    }
    let folderName = splitted[splitted.length - 1];
    splitted.splice(-1, 1);
    let path = splitted.join("/");
    const existingConfig = fs.existsSync(`./${path}/${folderName}`);

    if (!existingConfig) {
        if (path && path.length) {
            shell.mkdir("-p", path);
        }
        fs.mkdirSync(`./${path}/${folderName}`, function (err) {
            if (err) {
                console.error(err);
            }
        });
        res.modules.forEach(mod => {
            console.log(mod)
            createModule(`./${path}/${folderName}`, name, mod)
        })

    } else {
        console.error("this path already exists");
    }
};

module.exports = {
    addModule,
};
