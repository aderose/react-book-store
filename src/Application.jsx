import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useContext } from 'react';
import Home from './components/Home';
import Login from './components/Login';

import { UserContext } from './providers/UserProvider';

import { cssVariables, theme } from './styles';

const Application = () => {
  const user = useContext(UserContext);

  return (
    <ThemeProvider theme={{ ...theme, ...cssVariables }}>
      <CssBaseline />
      {user ? <Home /> : <Login />}
    </ThemeProvider>
  );
};

export default Application;
