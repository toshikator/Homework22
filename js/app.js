(()=>{
    const formConnector = document.getElementById('newElement');
    const productTitle = formConnector.title;
    const productManufacture = formConnector.manufacturer;
    const productPrice = formConnector.price;
    const productType = formConnector.type;
    const productSpecialParameter = formConnector.specialParameter;
    // const databaseName = `ProductDatabase`;
    const baseFromLocalStorage = (localStorage.ProductDatabase)?JSON.parse(localStorage.getItem('ProductDatabase')):[];
    const myStore = new Store('Lavka',baseFromLocalStorage);


    productType.addEventListener('change',()=>{
        productSpecialParameter.placeholder = Product.getSpecialParametersDatabase()[productType.value];
        (productType.value === 'chocolate')?productSpecialParameter.type = 'text':productSpecialParameter.type = 'number';
    })

    formConnector.addEventListener('submit',(eve)=>{
        // console.log('teestsse',productSpecialParameter);
        eve.preventDefault();
        // console.log('special: ', productSpecialParameter);
        let obj = {};
        switch (productType.value) {
            case 'milk':
                obj = new Milk(productTitle.value,
                    productManufacture.value,
                    productPrice.value,
                    productSpecialParameter.value);
                break;
            case 'wine':
                obj = new Wine(productTitle.value,
                    productManufacture.value,
                    productPrice.value,
                    productSpecialParameter.value);
                break;
            case 'chocolate':
                obj = new Chocolate(productTitle.value,
                    productManufacture.value,
                    productPrice.value,
                    productSpecialParameter.value);
                break;
            default: break;
       }
        myStore.addProduct(obj);
        localStorage.setItem('ProductDatabase',JSON.stringify(myStore.getAllProducts()));

       // console.log('object: ',obj);
        console.log('store all:',myStore.getAllProducts());
    });






})()