import React, { useContext } from 'react';

import { bought, notBought } from '../books.json';

import Logo from './Logo';
import Profile from './Profile';

import { GlobalStyle, Header } from '../style';

import { UserContext } from '../providers/UserProvider';
import BookList from './BookList';

const Home = () => {
  const { photoURL, displayName } = useContext(UserContext);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>
        <Logo />
        <Profile iconSrc={photoURL} name={displayName} />
      </Header>
      <BookList content="bought" books={bought} />
      <BookList content="not bought" books={notBought} />
    </React.Fragment>
  );
};

export default Home;
