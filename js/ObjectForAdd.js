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
        let nameOfSpecialParameter = 'unknown name of the special field in the form';



        let a = (ObjectForAdd.#productType.value.at(0).toUpperCase());
        let b = (ObjectForAdd.#productType.value.slice(1));

        if(Object.keys(ObjectForAdd.#specialParametersDatabase).includes(a+b)){
            nameOfSpecialParameter = ObjectForAdd.#specialParametersDatabase[a+b];
        }

        ObjectForAdd.#newObject[nameOfSpecialParameter] = ObjectForAdd.#productSpecialParameterConnector.value;
        alert(JSON.stringify( ObjectForAdd.#newObject));
        return JSON.parse(JSON.stringify(ObjectForAdd.#newObject));
    }



}