import React from 'react';

import { books } from '../books.json';

import BookList from './BookList';
import NavBar from './NavBar';

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BookList books={books} />
    </React.Fragment>
  );
};

export default Home;
