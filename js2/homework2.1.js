// Instruction:
// - Write class Book. Then, add a method to the object that outputs information about the 
// book.
// Class Book
// Constructor
// • Constructor(title, author, yearPublished): This initializes the properties 
// 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no 
// author', and 0 respectively.
// Properties
// • title: type String
// • author: type String
// • yearPublished: type number
// Methods
// • getInfo(): This method return a string that combines the book's title, author, 
// and year of publication.
// Initiate code:
// // Creating class Book 
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

// Example usage:
const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(myBook.getInfo());
