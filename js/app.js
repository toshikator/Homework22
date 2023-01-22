(()=>{
    const formConnector = document.getElementById('newElement');
    const productTitle = formConnector.title;
    const productManufacture = formConnector.manufacturer;
    const productPrice = formConnector.price;
    const productType = formConnector.type;
    const productSpecialParameter = formConnector.specialParameter;
    const nav = document.getElementById('nav');
    const section = document.getElementById('section');
    const sideNav = document.getElementById('side_nav');
    const content = document.querySelector('.content');
    const myStore = new Store('Lavka');

    const test0 = new Wine('buhlo','ssanina',100,14);
    const test1 = new Wine('buhlo1','ssanina polnaja',30,11);
    const test2 = new Wine('poilo ELITnoe','samogonshiki',150,19);
    const test3 = new Milk('milkSTD','burenka1',7.2,3.6);
    const test4 = new Milk('ecoMilk','burenkaECO',20,4.2);
    const test5 = new Milk('soiMilk','China',18,0.2);
    const test6 = new Chocolate('economy','unnamed',2,'who knows?');
    const test7 = new Chocolate('elite','Puratos',33,'extra dark fine chocolate');
    const test8 = new Chocolate('random gift','buhgalteria team',2,'the better way is have not this kind of goods');

    myStore.addProduct(test0);
    myStore.addProduct(test1);
    myStore.addProduct(test2);
    myStore.addProduct(test3);
    myStore.addProduct(test4);
    myStore.addProduct(test5);
    myStore.addProduct(test6);
    myStore.addProduct(test7);
    myStore.addProduct(test8);
    console.log(myStore);

    productType.addEventListener('change',()=>{
        productSpecialParameter.placeholder = Product.getSpecialParametersDatabase()[productType.value];
        (productType.value === 'chocolate')?productSpecialParameter.type = 'text':productSpecialParameter.type = 'number';
    });

    section.addEventListener('click', event =>{
        if (event.target.dataset.name === undefined){

        }
        else if (event.target.dataset.name === 'all'){
            renderProducts(myStore.getAllProducts());
            changeActiveClassOnElement(event);
        } else{
            renderProducts(myStore.getProductsByType(event.target.dataset.name));
            changeActiveClassOnElement(event);
        }
    });



    nav.addEventListener('click',event=>{
        if (event.target.id === 'productsLink'){
            console.log(myStore.getAllProducts());
            renderProducts(myStore.getAllProducts());
            formConnector.classList.add('hide');
            content.classList.remove('hide')
            sideNav.classList.remove('hide');
            changeActiveClassOnElement(event);
            for (let child of sideNav.firstElementChild.children) {
                child.classList.remove('active');
            }
            sideNav.firstElementChild.firstElementChild.classList.add('active');
        } else if(event.target.id === 'addLink'){
            formConnector.classList.remove('hide');
            formConnector.parentElement.style.justifyContent = 'center';
            content.classList.add('hide');
            sideNav.classList.add('hide');
            changeActiveClassOnElement(event);
        }
    });

    function renderProducts(products) {
        content.innerHTML = '';
        products.forEach(product=>{
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${product.constructor.name}</h2>
                    <h3>${product.titleGetter}</h3>
                    <h3>${product.manufactureGetter}</h3>
                    <h4>${product.specialParameterName}: ${product.specialParameterGetter}</h4>
                    <h4>Price: ${product.priceGetter}</h4>
            `;
            content.appendChild(card);
        });
    }
    function changeActiveClassOnElement(event) {
        Array.from(event.target.parentElement.children).forEach((node)=>{
            node.classList.remove('active');
        });
        event.target.classList.add('active');
    }
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
            case 'butter':
                obj = new Butter(productTitle.value,
                    productManufacture.value,
                    productPrice.value,
                    productSpecialParameter.value);
                break;
            default: break;
       }
        myStore.addProduct(obj);
        console.log('store all');
        localStorage.setItem('ProductDatabase',JSON.stringify(myStore.getAllProducts()));
        const msg = document.createElement('div');
        msg.textContent = `Successfully added: ${formConnector.title.value}`;
        msg.classList.add('alert-success');
        formConnector.appendChild(msg);
        setTimeout(()=>{
            msg.classList.add('hide');
        },1800)
       // console.log('object: ',obj);
        console.log('store all:',myStore.getAllProducts());
    });




    renderProducts(myStore.getAllProducts());
})()