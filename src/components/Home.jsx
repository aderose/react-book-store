import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DummyCard, TransparentPaper } from '../styles';

import NavBar from './NavBar';

import BookForm from './BookForm';
import BookList from './BookList';

const Home = () => {
  const [formActive, setFormActive] = useState(false);
  const [editBook, setEditBook] = useState(undefined);

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
    <React.Fragment>
      <NavBar />
      <Container maxWidth="md">
        {formActive ? (
          <BookForm hideForm={hideForm} editBook={editBook} />
        ) : (
          <TransparentPaper elevation={0} square>
            <DummyCard type="button" onClick={toggleForm}>
              <Typography variant="h5" component="p">
                + Add Book
              </Typography>
            </DummyCard>
            <BookList toggleEditForm={toggleEditForm} />
          </TransparentPaper>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Home;
