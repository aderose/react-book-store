import React, { useContext } from 'react';
import Home from './components/Home';
import Login from './components/Login';

import { UserContext } from './providers/UserProvider';

const Application = () => {
  const user = useContext(UserContext);

  return user ? <Home /> : <Login />;
};

export default Application;
