import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DummyCard, TransparentPaper } from '../styles';

import useBooksManager from '../hooks/useBooksManager';

import AddIcon from '@material-ui/icons/Add';

import BookForm from './BookForm';
import Book from './Book';

const BookList = () => {
  const { books, initializeBooks, addBook, updateBook } = useBooksManager();
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    initializeBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleForm = () => {
    setFormActive((prevStatus) => !prevStatus);
  };

  return (
    <Container maxWidth="md">
      {formActive ? (
        <BookForm addBook={addBook} hideForm={toggleForm} />
      ) : (
        <TransparentPaper elevation={0} square>
          <DummyCard type="button" onClick={toggleForm}>
            <AddIcon />
            <Typography variant="h5" component="p">
              Add Book
            </Typography>
          </DummyCard>
          {books.map((book) => (
            <Book key={book.id} book={book} updateBook={updateBook} />
          ))}
        </TransparentPaper>
      )}
    </Container>
  );
};

export default BookList;
