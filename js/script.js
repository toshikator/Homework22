class Product {
    static getSpecialParametersDatabase() {
        return JSON.parse(JSON.stringify(Product.#specialParametersDatabase));
    }
    static #amountOfInstances = 0;
    static getAmountOfInstances() {
        return this.#amountOfInstances
    }
    static #specialParametersDatabase ={
        milk: 'fat',
        chocolate: 'kind',
        wine: 'alcohol',
    }
    #id;
    #title;
    #manufacture;
    #price;
    #specialParameter;
    #specialParameterName;
    constructor(title = 'defaultTitle',
                manufacture = 'defaultManufacture',
                price = 0) {
        this.titleSetter = title;
        this.manufactureSetter = manufacture;
        this.priceSetter = price;
        this.#id = Product.#amountOfInstances++;
    }
    get idGetter(){ return this.#id; }
    get titleGetter(){ return this.#title; }
    get priceGetter(){ return this.#price; }
    get manufactureGetter(){ return this.#manufacture; }
    set titleSetter(value){
        if (typeof value === "string") {
            this.#title = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to title');
        }
    }
    set manufactureSetter(value){
        if (typeof value === "string") {
            this.#manufacture = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to manufacture');
        }
    }
    set priceSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0))){
            this.#price = Number(value);
        } else{
            console.error('ERROR!!! Trying to set not a number to price');
        }
    }
}

class Milk extends  Product{
    #specialParameter;
    #specialParameterName = Product.getSpecialParametersDatabase()[this.constructor.name.toLowerCase()];
    constructor(title, manufacture, price, specialParameter) {
        super(title, manufacture, price);
        this.specialParameterSetter = specialParameter;
    }
    get specialParameterNameGetter(){return this.#specialParameterName}
    get specialParameterGetter(){ return this.#specialParameter; }
    set specialParameterSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0)) && (!Number.isNaN(Number(value) < 100))){
            this.#specialParameter = Number(value);
        } else{
            console.error('ERROR!!! Trying to set incorrect value to alcohol');
        }
    }
}
class Chocolate extends Product{
    #specialParameter;
    #specialParameterName = Product.getSpecialParametersDatabase()[this.constructor.name.toLowerCase()];
constructor(title, manufacture, price, specialParameter) {
    super(title, manufacture, price);
    this.specialParameterSetter = specialParameter;
}
    get specialParameterNameGetter(){return this.#specialParameterName}
    get specialParameterGetter(){ return this.#specialParameter; }
    set specialParameterSetter(value){
        if (typeof value === "string") {
            this.#specialParameter = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to kind');
        }
    }
}
class Wine extends  Product{
    #specialParameter;
    #specialParameterName = Product.getSpecialParametersDatabase()[this.constructor.name.toLowerCase()];
    constructor(title, manufacture, price, specialParameter) {
        super(title, manufacture, price);
        this.specialParameterSetter = specialParameter;
    }
    get specialParameterNameGetter(){return this.#specialParameterName}
    get specialParameterGetter(){ return this.#specialParameter; }
    set specialParameterSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0)) && (!Number.isNaN(Number(value) < 100))){
            this.#specialParameter = Number(value);
        } else{
            console.error('ERROR!!! Trying to set incorrect value to alcohol');
        }
    }
}

class Store {
    #storeInfo = {};
    #products = [];
    #productType = ['Milk', 'Chocolate', 'Wine'];

    constructor(name = 'default store', productDatabaseInit = []) {
        this.nameSetter = name;
        this.#products = (JSON.parse(JSON.stringify(productDatabaseInit)));
    }
    set nameSetter(value){
        if (typeof value === "string") {
            this.#storeInfo['storeName'] = value;
        } else {
            console.error('ERROR!!! Try to set not a string to name of the store');
        }
    }
    addProduct(product){
        if (product instanceof Product && !this.#products.includes(product)){
            this.#products.push(product);
        } else {
            console.error('ERROR!!! Trying to add incorrect instance to products, or add existing  product');
        }
    }
    getAllProducts(){
        return this.#products.map(value => value);
    }
    getByType(type){
        if (this.#productType.includes(type)) {
            return this.#products.filter((product) => {
                return product.constructor.name === type;
            });
        } else {
            console.error('ERROR!!! Trying to get incorrect type of product');
            return '~!!!ERROR, here is incorrect DATA!!!~';
        }
    }
}

