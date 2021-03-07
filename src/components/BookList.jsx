import React from 'react';
import Container from '@material-ui/core/Container';

import { TransparentPaper } from '../styles';

import Book from './Book';

const BookList = ({ books }) => {
  return (
    <Container maxWidth="md">
      <TransparentPaper elevation={0} square>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <Book book={{ id: 'DUMMY' }} />
      </TransparentPaper>
    </Container>
  );
};

export default BookList;
