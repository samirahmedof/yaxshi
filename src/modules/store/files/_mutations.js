const mutationsText = (crud) => {
    let result = "";
    result += `export default {\n`;

    if (crud) {
        crud.forEach(i => {
            if (i === 'Get') {
                result += `\nsetItems(state, payload) {
        state.items = payload;
    },\n\n`;
            } else if (i === 'Delete') {
                result += `\ndeleteItem(state, payload) {
        state.items = state.items.filter((x) => {
            return x.id != payload;
        });
    },\n\n`;
            }
        });
    }

    result += `}`;

    return result;
};

module.exports = {
    mutationsText,
};
  