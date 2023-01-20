
class Milk extends  Product{
    #fat;
    constructor(title, manufacture, price, fat) {
        super(title, manufacture, price);
        this.fatSetter = fat;
    }

    get fatGetter(){ return this.#fat; }
    set fatSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0)) && (!Number.isNaN(Number(value) < 100))){
            this.#fat = Number(value);
        } else{
            console.error('ERROR!!! Trying to set incorrect value to fat');
        }
    }
}