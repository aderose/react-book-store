import React from 'react';
import Application from './Application';

import UserProvider from './providers/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
};

export default App;
