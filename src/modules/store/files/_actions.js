const {kebabToPascal} = require('../../../global/kebab-pascal');
const {kebabToCamel} = require('../../../global/kebab-camel');
const actionsText = (crud, name) => {
    let pascalName = kebabToPascal(name);
    let camelName = kebabToCamel(name);
    let result = '';

    if (crud) {
        result += `import axios from "axios";
import api from '@/core/api';
import Vue from "vue";
import ${pascalName}Model from "../models/${name}.model";\n\n`;
    }

    result += `export default {\n`;

    if (crud) {
        crud.forEach(i => {
            if (i === 'Get') {
                result += `\ngetItems({commit}) {
        return axios
            .get(api.${camelName})
            .then((res) => {
                let data = res.data.${camelName};
                commit(
                    "setItems",
                    data.map((i) => {
                        return new ${pascalName}Model(i);
                    })
                );
                return true;
            })
            .catch(() => {
                return false;
            });
    },\n`;
            } else if (i === 'Set') {
                result += `\nsetItem(_, payload) {
        return axios
            .post(api.${camelName}, payload)
            .then((res) => {
                Vue.$toast.success(res.data);
                return true;
            })
            .catch(() => {
                return false;
            });
    },\n`;

            } else if (i === 'Delete') {
                result += `\ndeleteItem({commit}, id) {
        return axios
            .delete(api.${camelName} + \`/\${id}\`)
            .then((response) => {
                const res = response.data;
                commit("deleteItem", id);
                Vue.$toast.success(res);
                return true;
            })
            .catch(() => {
                return false;
            });
    },\n`;

            } else if (i === 'Update') {
                result += `\nupdateItem(_, payload) {
        return axios
            .put(api.${camelName} + \`/\${payload.id}\`, payload.data)
            .then((response) => {
                const res = response.data;
                Vue.$toast.success(res);
                return true;
            })
            .catch(() => {
                return false;
            });
    },\n`;

            } else if (i === 'GetById') {
                result += `\ngetItemById(_, id) {
        return axios
            .get(api.${camelName} + \`/\${id}\`)
            .then((response) => {
                const res = new ${pascalName}Model(response.data.${camelName});
                return res;
            })
            .catch(() => {
                return false;
            });
    },\n`;
            }
        });
    }

    result += `}`;

    return result;
};

module.exports = {
    actionsText,
};
