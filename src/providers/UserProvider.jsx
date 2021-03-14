import React, { useState, useEffect, createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { auth } = useFirebase();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
