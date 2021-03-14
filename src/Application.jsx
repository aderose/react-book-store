import React, { useContext } from 'react';
import { UserContext } from './providers/UserProvider';
import useFirebase from './hooks/useFirebase';

import Home from './components/Home';
import Login from './components/Login';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { cssVariables, theme } from './styles';

const Application = () => {
  const user = useContext(UserContext);
  const firebase = useFirebase();

  return (
    <ThemeProvider theme={{ ...theme, ...cssVariables }}>
      <CssBaseline />
      {user ? <Home firebase={firebase} /> : <Login firebase={firebase} />}
    </ThemeProvider>
  );
};

export default Application;
