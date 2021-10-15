const fs = require("fs");
const {scssText} = require("../../component/files/_scss");
const {jsText} = require("../../component/files/_js");
const {vueText} = require("../../component/files/_vue");


const createModule = (path, name, nameModule) => {
        if (nameModule !== 'Component') {
            fs.mkdirSync(`./${path}/${nameModule.toLowerCase()}`, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }
     
        if (nameModule === 'Store') {

        }
        if (nameModule === 'Component') {
            fs.writeFileSync(
                `./${path}/${name}.cmp.scss`,
                scssText(name),
                "utf8",
                function (err) {
                    if (err) {
                        console.error(err);
                    }
                }
            );
            fs.writeFileSync(
                `./${path}/${name}.cmp.ts`,
                jsText(name),
                "utf8",
                function (err) {
                    if (err) {
                        console.error(err);
                    }
                }
            );
            fs.writeFileSync(
                `./${path}/${name}.cmp.vue`,
                vueText(name),
                "utf8",
                function (err) {
                    if (err) {
                        console.error(err);
                    }
                }
            );
        }
    }
;

module.exports = {
    createModule,
};
