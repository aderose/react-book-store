import React, { useContext, useEffect } from 'react';
import { UserContext } from './providers/UserProvider';
import useFirebase from './hooks/useFirebase';

import Home from './components/Home';
import Login from './components/Login';

const Application = () => {
  const user = useContext(UserContext);
  const firebase = useFirebase();

  useEffect(() => {
    const checkInitialisationStatus = async () => {
      if (user) {
        await firebase.updateUserInitialisation();
      }
    };
    checkInitialisationStatus();
  });

  return user ? <Home firebase={firebase} /> : <Login firebase={firebase} />;
};

export default Application;
