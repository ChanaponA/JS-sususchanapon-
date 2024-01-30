


let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true, 56, false, {name: "John", surname: "Smith"}, {name: "Joy", surname: "Stein"}];

mixedArray.forEach((arr)=>{
    if(typeof arr === "object" && arr != null)
    console.log (arr)
})







