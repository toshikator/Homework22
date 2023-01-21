(()=>{
    const formConnector = document.getElementById('newElement');
    const productTitle = formConnector.title;
    const productManufacture = formConnector.manufacturer;
    const productPrice = formConnector.price;
    const productType = formConnector.type;
    const productSpecialParameter = formConnector.special_parameter;

    const myStore = new Store('Lavka');

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


       // console.log('object: ',obj);
        console.log('store all:',myStore.getAll());
    });






})()