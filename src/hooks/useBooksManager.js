import { useState } from 'react';

// import createBook from './createBook';

import {
  addBookToFirestore,
  getBooksFromFirestore,
  updateBookPropertyInFirestore,
} from '../firebase';

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

  const updateBookProperty = (id, property, value) => {
    updateBookPropertyInFirestore(id, property, value);

    // change book property without changing order of books
    setBooks((prevBooks) => {
      const tempBooks = [...prevBooks];
      const index = tempBooks.map((book) => book.id).indexOf(id);
      tempBooks[index][property] = value;
      return tempBooks;
    });
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const initializeBooks = async () => {
    setBooks(await getBooksFromFirestore());
  };

  return {
    books,
    initializeBooks,
    addBook,
    updateBookProperty,
    removeBook,
  };
};

export default useBooksManager;
