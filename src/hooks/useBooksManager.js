import { useState } from 'react';

// import createBook from './createBook';

import { addBookToFirestore, getBooksFromFirestore } from '../firebase';

const useBooksManager = () => {
  const [books, setBooks] = useState([]);

  const addBook = (author, title, price, isRead, isBought) => {
    const id = addBookToFirestore({
      author,
      title,
      price,
      isRead,
      isBought,
    });
    setBooks((prevBooks) => [
      ...prevBooks,
      { id, author, title, price, isRead, isBought },
    ]);
  };

  const updateBook = (id, property, value) => {
    const book = books.find((book) => book.id === id);
    if (book) book[property] = value;
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const initializeBooks = async () => {
    const books = await getBooksFromFirestore();
    setBooks(books);
  };

  return {
    books,
    initializeBooks,
    addBook,
    updateBook,
    removeBook,
  };
};

export default useBooksManager;
