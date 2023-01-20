

class Wine extends  Product{
    #alcohol;
    constructor(title, manufacture, price, alcohol) {
        super(title, manufacture, price);
        this.alcoholSetter = alcohol;
    }

    get alcoholGetter(){ return this.#alcohol; }
    set alcoholSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0)) && (!Number.isNaN(Number(value) < 100))){
            this.#alcohol = Number(value);
        } else{
            console.error('ERROR!!! Trying to set incorrect value to alcohol');
        }
    }
}