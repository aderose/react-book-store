import React from 'react';

import Book from './Book';

import { ListContainer } from '../style';

const BookList = ({ content, books }) => {
  return (
    <ListContainer content={content}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <Book
        book={{
          id: 'DUMMY',
          title: 'DUMMY',
          author: 'DUMMY',
          price: 'DUMMY',
          isRead: false,
        }}
      />
    </ListContainer>
  );
};

export default BookList;
