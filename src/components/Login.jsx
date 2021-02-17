import React from 'react';

import Logo from './Logo';

import { GlobalStyle, Card, Title, Text, Button } from '../style';

const Login = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Card>
        <Logo />
        <Title>Sign in</Title>
        <Text margin="0 0 1.5em 0">
          Sign in using your Google account to get quick access to your book
          store.
        </Text>
        <Button>Google</Button>
      </Card>
    </React.Fragment>
  );
};

export default Login;
