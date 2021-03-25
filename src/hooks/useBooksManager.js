import { useState } from 'react';

const useBooksManager = (firebase) => {
  const [books, setBooks] = useState([]);
  const {
    addBookToFirestore,
    updateBookPropertyInFirestore,
    updateBookInFirestore,
    removeBookFromFirestore,
    getBooksFromFirestore,
  } = firebase;

  const addBook = async (author, title, price, isRead, isBought) => {
    const id = await addBookToFirestore({
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

  const updateBookProperty = async (id, property, value) => {
    await updateBookPropertyInFirestore(id, property, value);

    // change book property without changing order of books
    setBooks((prevBooks) => {
      const tempBooks = [...prevBooks];
      const index = tempBooks.map((book) => book.id).indexOf(id);
      tempBooks[index][property] = value;
      return tempBooks;
    });
  };

  const updateBook = async (book) => {
    await updateBookInFirestore(book);
    setBooks((prevBooks) => {
      const tempBooks = [...prevBooks];
      const index = tempBooks.map((book) => book.id).indexOf(book.id);
      tempBooks[index] = { ...tempBooks[index], ...book };
      return tempBooks;
    });
  };

  const removeBook = (id) => {
    removeBookFromFirestore(id);
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
    updateBook,
    removeBook,
  };
};

export default useBooksManager;
