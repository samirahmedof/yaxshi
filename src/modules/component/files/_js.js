const { kebabToPascal } = require("../../../global/kebab-pascal");

const jsText = (name) => {
  let pascalName = kebabToPascal(name);

  let result = `export default {
name: "${pascalName}",
};`;
  return result;
};

module.exports = {
  jsText,
};
