
import { Books } from './books.js';
const printHighRatedBooks = () => {
    Books.filter(book => book.rating > 4.5)
         .forEach(book => console.log(book.title));
};
const printBookDetails = () => {
    Books.map(({ title, author, rating, genre }) => 
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`)
    );
};
const printFictionBooks = () => {
    Books.filter(book => book.genre === "Fiction")
         .forEach(book => console.log(book.title));
};
const getBookAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log(authors);
};
printHighRatedBooks();
printBookDetails();
printFictionBooks();
getBookAuthors();
