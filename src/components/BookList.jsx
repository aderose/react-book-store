import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import useBookListManager from '../hooks/useBooksManager';

import { TransparentPaper } from '../styles';

import Book from './Book';

const BookList = () => {
  const { books, initializeBooks } = useBookListManager();

  useEffect(() => {
    initializeBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md">
      <TransparentPaper elevation={0} square>
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
        <Book book={{ id: 'DUMMY' }} />
      </TransparentPaper>
    </Container>
  );
};

export default BookList;
