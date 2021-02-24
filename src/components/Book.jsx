import React, { useState } from 'react';
import FontAwesomeIcon from '../fontAwesome';

import {
  DummyComponent,
  BookComponent,
  BookTools,
  BookInfo,
  InteractiveIcon,
  StatusIcon,
  Price,
  Name,
  Author,
} from '../style';

const Book = ({ book }) => {
  const { title, author, price } = book;
  const [isRead, setIsRead] = useState(book.isRead);
  return book.id === 'DUMMY' ? (
    <DummyComponent>Add book</DummyComponent>
  ) : (
    <BookComponent>
      <BookTools>
        <InteractiveIcon>
          <FontAwesomeIcon icon="times-circle" />
        </InteractiveIcon>
        <InteractiveIcon>
          <FontAwesomeIcon icon="edit" />
        </InteractiveIcon>
      </BookTools>
      <BookInfo onClick={() => setIsRead(!isRead)}>
        <Author>{author}</Author>
        <Name>{title}</Name>
        <Price>{price}</Price>
        <StatusIcon status={isRead}>{isRead ? 'Read' : 'Not Read'}</StatusIcon>
      </BookInfo>
    </BookComponent>
  );
};

export default Book;
