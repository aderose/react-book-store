import React, { useEffect } from 'react';

import useBooksManager from '../hooks/useBooksManager';

import Book from './Book';

const BookList = ({ toggleEditForm }) => {
  const {
    books,
    initializeBooks,
    updateBookProperty,
    removeBook,
  } = useBooksManager();

  useEffect(() => {
    initializeBooks().then(() => {
      console.log('Got books from Firestore (BookList)');
      console.log({ booksLength: books.length });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return books.map((book) => (
    <Book
      key={book.id}
      book={book}
      updateBookProperty={updateBookProperty}
      showForm={toggleEditForm(book)}
      removeBook={removeBook}
    />
  ));
};

export default BookList;
