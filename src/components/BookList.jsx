import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

import createBookListManager from '../factories/createBookListManager';

import { TransparentPaper } from '../styles';

import Book from './Book';

const BookList = () => {
  const bookListManager = createBookListManager();

  const [bookList, setBookList] = useState(bookListManager.bookList);

  useEffect(() => {
    bookListManager
      .populateListFromFirestore()
      .then((list) => setBookList(list));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md">
      <TransparentPaper elevation={0} square>
        {bookList.map((book, index) => (
          <Book key={index} book={book} />
        ))}
        <Book book={{ id: 'DUMMY' }} />
      </TransparentPaper>
    </Container>
  );
};

export default BookList;
