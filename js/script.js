

(()=>{
    // const scriptList = [
    //     '',
    //     '',
    //     '',
    //     '',
    //     '',
    //     '',
    //
    //
    //
    //
    // ];
    // scriptList.forEach((value)=>{
    //     const script = document.createElement('script');
    //     script.setAttribute('src',value);
    //     // script.defer = false;
    //     document.body.appendChild(script);
    //     // console.log(script);
    // });


    const newProductAddForm = document.getElementById('newElement');



    let NewProduct;
    newProductAddForm.onsubmit = ()=>{
        NewProduct = ObjectForAdd.getNewObject;
        // alert(NewProduct);
    };



})()

