class ObjectForAdd {
    static #formConnector = document.getElementById('newElement');
    static #productTitle = this.#formConnector.title;
    static #productManufacturer = this.#formConnector.manufacturer;
    static #productPrice = this.#formConnector.price;
    static #productType = this.#formConnector.type;
    static #productSpecialParameterConnector = this.#formConnector.special_parameter;
    static #specialParametersDatabase = Product.getSpecialParametersDatabase;
    // static #getNameOfSpecialField = ObjectForAdd.#specialParametersDatabase[ObjectForAdd.#productSpecialParameterConnector];
    static #newObject = {};
    static get getNewObject(){
        ObjectForAdd.#newObject['title'] = ObjectForAdd.#productTitle.value;
        ObjectForAdd.#newObject['manufacturer'] = ObjectForAdd.#productManufacturer.value;
        ObjectForAdd.#newObject['price'] = ObjectForAdd.#productPrice.value;
        let valueOfSpecialParameter = 'unknown name of the special field';
        // alert(JSON.stringify(Object.keys(ObjectForAdd.#specialParametersDatabase)));
        if ((Object.keys(ObjectForAdd.#specialParametersDatabase))[this.#productType.value]){
            valueOfSpecialParameter = ObjectForAdd.#specialParametersDatabase[ObjectForAdd.#productType.value];
        }
        ObjectForAdd.#newObject[ObjectForAdd.#productType.value] = valueOfSpecialParameter;
        alert(JSON.stringify( ObjectForAdd.#newObject));
        return JSON.parse(JSON.stringify(ObjectForAdd.#newObject));
    }



}