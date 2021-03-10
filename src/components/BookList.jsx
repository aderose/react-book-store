import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DummyCard, TransparentPaper } from '../styles';

import useBookListManager from '../hooks/useBooksManager';

import AddIcon from '@material-ui/icons/Add';

import BookForm from './BookForm';
import Book from './Book';

const BookList = () => {
  const { books, initializeBooks, addBook } = useBookListManager();
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    initializeBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleForm = () => {
    setFormActive((prevStatus) => !prevStatus);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <TransparentPaper elevation={0} square>
          <DummyCard type="button" onClick={toggleForm}>
            <AddIcon />
            <Typography variant="h5" component="p">
              Add Book
            </Typography>
          </DummyCard>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </TransparentPaper>
      </Container>
      {formActive && <BookForm addBook={addBook} hideForm={toggleForm} />}
    </React.Fragment>
  );
};

export default BookList;
