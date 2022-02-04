export default class TestModel {
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

}