let mixedArray = [42, "hello", {name: 'Joe', surname: 'Doe'}, true,56,false, {name: 
    'John', surname: 'Smith'}, {name: 'Joy', surname: 'Stein'}];

    mixedArray.forEach((mix)=>{
        if(typeof mix === 'object' && mix != null){
            console.log(mix)
        }
    })

    