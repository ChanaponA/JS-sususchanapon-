// 2.
// Instruction:
// - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title, 
// author, yearPublished. Additionally, use a 'getInfo()' method.
// Initiate code:
// // Insert your code here

class Book {
    constructor(title, author, yearPublished) {
        this.title = title || 'no title';
        this.author = author || 'no author';
        this.yearPublished = yearPublished || 0;
    }

    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`;
    }
}

// Creating an object 'practice1'
const practice1 = new Book('Sample Book', 'John Doe', 2022);
console.log(practice1.getInfo());
