const book1 = {isbn:'1234',title:'js',author:'US',page:300}
const book2 = {isbn:'5678',title:'JAVA',author:'US',page:300}

bookmerge=(book1,book2) =>{
    return {...book1 ,...book2}
}


console.log(bookmerge(book1,book2));