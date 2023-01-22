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
    specialParameterSetter(value) {
        if (this.constructor.name === 'Chocolate'){
            if (typeof value === "string") {
                this.#specialParameter = value;
            } else {
                this.#specialParameter = '';
                console.error(`ERROR!!! Trying to set incorrect special parameter for ${this.constructor.name}`);
            }
        } else if(this.constructor.name === 'Milk' || this.constructor.name === 'Wine'){
            if (!Number.isNaN(Number(value)) && value !== undefined
                && (Number(value) >= 0) && (Number(value) < 100)){
                this.#specialParameter = Number(value);
            } else{
                this.#specialParameter = 0;
                console.error(`ERROR!!! Trying to set incorrect special parameter for ${this.constructor.name}`);
            }
        }else{
            this.#specialParameter = 0;
        }
    }
    #specialParameterName = Product.getSpecialParametersDatabase()[this.constructor.name.toLowerCase()];
    constructor(title = 'defaultTitle',
                manufacture = 'defaultManufacture',
                price = 0) {
        this.titleSetter = title;
        this.manufactureSetter = manufacture;
        this.priceSetter = price;
        this.#id = Product.#amountOfInstances++;
    }
    get specialParameterName() {
        return this.#specialParameterName;
    }
    get specialParameterGetter(){ return this.#specialParameter; }
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
    constructor(title, manufacture, price, specialParameter) {
        super(title, manufacture, price);
        this.specialParameterSetter(specialParameter);
    }
}
class Chocolate extends Product{
constructor(title, manufacture, price, specialParameter) {
    super(title, manufacture, price);
    this.specialParameterSetter(specialParameter);
}
}
class Wine extends  Product{
    constructor(title, manufacture, price, specialParameter) {
        super(title, manufacture, price);
        this.specialParameterSetter(specialParameter);
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
    getProductsByType(type){
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

