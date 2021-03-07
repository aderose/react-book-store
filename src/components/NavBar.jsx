import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Profile from './Profile';

import { Logo, Nav, Title } from '../styles';

const NavBar = () => {
  return (
    <Nav position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Logo size={48} margin="-5px 5px 0 0" />
          <Title variant="h5" component="h1">
            Book Store
          </Title>
          <Profile />
        </Toolbar>
      </Container>
    </Nav>
  );
};

export default NavBar;
