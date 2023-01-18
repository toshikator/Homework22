class Chocolate extends Product{
    #kind;
    constructor(title, manufacture, price, kind) {
        super(title, manufacture, price);
        this.kindSetter = kind;
    }

    get kindGetter(){ return this.#kind; }
    set kindSetter(value){
        if (typeof value === "string") {
            this.#kind = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to kind');
        }
    }
}