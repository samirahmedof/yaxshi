export default {

setItems(state, payload) {
        state.items = payload;
    },


deleteItem(state, payload) {
        state.items = state.items.filter((x) => {
            return x.id != payload;
        });
    },

}