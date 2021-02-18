import React, { useContext } from 'react';

import Logo from './Logo';
import Profile from './Profile';

import { GlobalStyle, Header } from '../style';

import { UserContext } from '../providers/UserProvider';

const Home = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName } = user;
  console.log(user.photoURL);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>
        <Logo />
        <Profile iconSrc={photoURL} name={displayName} />
      </Header>
    </React.Fragment>
  );
};

export default Home;
