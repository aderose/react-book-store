import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DummyCard, TransparentPaper } from '../styles';

import useBooksManager from '../hooks/useBooksManager';

import AddIcon from '@material-ui/icons/Add';

import BookForm from './BookForm';
import Book from './Book';

const BookList = () => {
  const {
    books,
    initializeBooks,
    addBook,
    updateBookProperty,
    updateBook,
  } = useBooksManager();
  const [formActive, setFormActive] = useState(false);
  const [editBook, setEditBook] = useState(undefined);

  useEffect(() => {
    initializeBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleForm = () => {
    setFormActive((prevStatus) => !prevStatus);
  };

  const toggleEditForm = (book) => () => {
    setEditBook(book);
    toggleForm();
  };

  const hideForm = () => {
    setEditBook(undefined);
    toggleForm();
  };

  return (
    <Container maxWidth="md">
      {formActive ? (
        <BookForm
          addBook={addBook}
          updateBook={updateBook}
          hideForm={hideForm}
          editBook={editBook}
        />
      ) : (
        <TransparentPaper elevation={0} square>
          <DummyCard type="button" onClick={toggleForm}>
            <AddIcon />
            <Typography variant="h5" component="p">
              Add Book
            </Typography>
          </DummyCard>
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              updateBookProperty={updateBookProperty}
              showForm={toggleEditForm(book)}
            />
          ))}
        </TransparentPaper>
      )}
    </Container>
  );
};

export default BookList;
