class Product {
    static #amountOfInstances = 0;
    static getAmountOfInstances() {
        return this.#amountOfInstances
    }
    #id;
    #title;
    #manufacture;
    #price;
    constructor(title = 'defaultTitle', manufacture = 'defaultManufacture', price = 0) {
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
