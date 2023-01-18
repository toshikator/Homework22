class Store {
    #storeInfo = {};
    #products = [];
    #productType = ['Milk', 'Chocolate', 'Wine'];

    constructor(name) {
        this.nameSetter = name;
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
    getAll(){
        return [...this.#products];
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

