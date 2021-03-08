import createBook from './createBook';

import { addBookToFirestore, getBooksFromFirestore } from '../firebase';

const createBookListManager = () => {
  let bookList = [];

  const addBook = (author, title, price, isRead, isBought) => {
    const bookId = addBookToFirestore({
      author,
      title,
      price,
      isRead,
      isBought,
    });
    const book = createBook(bookId, author, title, price, isRead, isBought);
    bookList.push(book);
  };

  const updateBook = (id, property, value) => {
    const book = bookList.find((book) => book.id === id);
    book[property] = value;
  };

  const removeBook = (id) => {
    bookList = bookList.filter((book) => book.id !== id);
  };

  const populateListFromFirestore = async () => {
    const bookList = await getBooksFromFirestore();
    return bookList;
  };

  return {
    bookList,
    populateListFromFirestore,
    addBook,
    updateBook,
    removeBook,
  };
};

export default createBookListManager;
