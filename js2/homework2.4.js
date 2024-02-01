// 4
// Instruction:
// - Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and 
// methods in both classes.
// Initiate code:
// // Insert your code her
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

// Creating a Book object
const practiceBook = new Book('Practice Book', 'John Doe', 150, 'Educational');

// Creating a Library object
const practiceLibrary = new Library('Practice Library');

// Adding the Book object to the Library
practiceLibrary.addBook(practiceBook);

// Example usage of Library methods
console.log(practiceLibrary.getBooksByGenre('Educational'));
console.log(practiceLibrary.getTotalPagesByGenre('Educational'));
