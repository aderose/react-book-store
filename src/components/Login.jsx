import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Logo, LoginCard, LoginCardContent, LoginButton } from '../styles';

const Login = ({ firebase }) => {
  const { signInWithGoogle } = firebase;

  return (
    <LoginCard elevation={5}>
      <LoginCardContent>
        <Logo size={96} />
        <Typography gutterBottom align="center" variant="h4" component="h1">
          Sign In
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          align="center"
          color="textSecondary"
        >
          Sign in using a Google account to get quick access to your book store.
        </Typography>
        <LoginButton onClick={signInWithGoogle}>
          Proceed With Google
        </LoginButton>
      </LoginCardContent>
    </LoginCard>
  );
};

export default Login;
