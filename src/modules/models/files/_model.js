const { kebabToPascal } = require("../../../global/kebab-pascal");

const modelText = (name) => {
  pascalName = kebabToPascal(name);
  let result = `export default class ${pascalName}Model {
    constructor(item) {
        this._setId(item);
       
    }

    /**
     * set id
     * @param id
     * @private
     */
    _setId({id}) {
        this.id = id;
    }

}`;

  return result;
};

module.exports = {
  modelText,
};
