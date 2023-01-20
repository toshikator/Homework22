

(()=>{
    const scriptList = [
        './js/Product.js',
        './js/Milk.js',
        './js/Chocolate.js',
        './js/Wine.js',
        './js/Store.js',
        './js/ObjectForAdd.js',




    ];
    scriptList.forEach((value)=>{
        const script = document.createElement('script');
        script.setAttribute('src',value);
        script.defer = false;
        document.head.appendChild(script);
        // console.log(script);
    });






})()

