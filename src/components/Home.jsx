import React from 'react';

import BookList from './BookList';
import NavBar from './NavBar';

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BookList />
    </React.Fragment>
  );
};

export default Home;
