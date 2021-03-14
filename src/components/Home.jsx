import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DummyCard, TransparentPaper } from '../styles';

import BookForm from './BookForm';
import BookList from './BookList';
import NavBar from './NavBar';

const Home = ({ firebase }) => {
  const [formActive, setFormActive] = useState(false);
  const [editBook, setEditBook] = useState(undefined);
  const { userInitialised } = firebase;

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
      <NavBar firebase={firebase} />
      <Container maxWidth="md">
        {formActive ? (
          <BookForm
            firebase={firebase}
            hideForm={hideForm}
            editBook={editBook}
          />
        ) : (
          <TransparentPaper elevation={0} square>
            <DummyCard type="button" onClick={toggleForm}>
              <Typography variant="h5" component="p">
                + Add Book
              </Typography>
            </DummyCard>
            {userInitialised && (
              <BookList firebase={firebase} toggleEditForm={toggleEditForm} />
            )}
          </TransparentPaper>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Home;
