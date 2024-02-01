// 3.
// Instruction:
// - Creating a library system using class Book and Library.
// Class Book:
// Constructor
// • Constructor(title, author, pages, genre): This initializes the properties 'title', 
// 'author' , ' pages' and 'genre'.
// Properties
// • title: type string
// • author: type string
// • pages: type number
// • genre: type string
// Methods
// • getSummary() - Returns a string summary of the book ex: .
// "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
// Class Library:
// Constructor
// • Constructor(name): This initializes the properties 'name' and creates an 
// empty array in the property books
// Properties
// • name: type string
// • books: type array of Book objects, initially empty.
// Methods
// • addBook(newBook) - Accepts a Book object and adds it to the books array.
// • getBooksByGenre(genre) - Returns an array of books that match the 
// specified genre.
// • getTotalPagesByGenre(genre) - Returns the total number of pages for all 
// books of a specified genre
class Book {
    constructor(title, author, pages, genre) {
        this.title = title || 'no title';
        this.author = author || 'no author';
        this.pages = pages || 0;
        this.genre = genre || 'no genre';
    }

    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
}

class Library {
    constructor(name) {
        this.name = name || 'Unnamed Library';
        this.books = [];
    }

    addBook(newBook) {
        if (newBook instanceof Book) {
            this.books.push(newBook);
            console.log(`Book "${newBook.title}" added to the library.`);
        } else {
            console.error('Invalid book object. Please provide a valid Book object.');
        }
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }

    getTotalPagesByGenre(genre) {
        const genreBooks = this.getBooksByGenre(genre);
        return genreBooks.reduce((totalPages, book) => totalPages + book.pages, 0);
    }
}

// Example usage:
const myLibrary = new Library('My Awesome Library');

const book1 = new Book('Harry Wick', 'Conan', 345, 'Sci-Fi');
const book2 = new Book('The Mystery', 'Sherlock', 250, 'Mystery');
const book3 = new Book('Adventure Quest', 'Indiana', 400, 'Adventure');

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log(myLibrary.getBooksByGenre('Sci-Fi'));
console.log(myLibrary.getTotalPagesByGenre('Sci-Fi'));
