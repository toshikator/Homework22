class ObjectForAdd {
    static #formConnector = document.getElementById('newElement');
    static #productTitle = this.#formConnector.title.value;
    static #productManufacturer = this.#formConnector.manufacturer.value;
    static #productPrice = this.#formConnector.price.value;
    static #productType = this.#formConnector.type.value;
    static #productSpecialParameterConnector = this.#formConnector.special_parameter.value;
    static #specialParametersDatabase = Product.specialParametersDatabase;
    static #getNameOfSpecialField = ObjectForAdd.#specialParametersDatabase[ObjectForAdd.#productSpecialParameterConnector];
    static #newObject = {};
    static get getNewObject(){
        ObjectForAdd.#newObject['title'] = ObjectForAdd.#productTitle;
        ObjectForAdd.#newObject['manufacturer'] = ObjectForAdd.#productManufacturer;
        ObjectForAdd.#newObject['price'] = ObjectForAdd.#productPrice;
        ObjectForAdd.#newObject[ObjectForAdd.#getNameOfSpecialField] = ObjectForAdd.#productSpecialParameterConnector.value;
        return JSON.parse(JSON.stringify(ObjectForAdd.#newObject));
    }



}