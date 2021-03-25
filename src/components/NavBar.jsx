import React from 'react';
import Profile from './Profile';

import Logo from './Logo';

const NavBar = ({ firebase }) => {
  return (
    <nav className="bg-gray-100 py-2 shadow-lg">
      <div className="w-11/12 max-w-3xl mx-auto flex justify-between items-center">
        <Logo color="text-strong-purple" size="w-12" />
        <Profile firebase={firebase} />
      </div>
    </nav>
  );
};

export default NavBar;
