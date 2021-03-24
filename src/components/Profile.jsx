import React, { useState, useContext, useRef } from 'react';
import { UserContext } from '../providers/UserProvider';
import FadePopup from './FadePopup';

const Profile = ({ firebase }) => {
  const { displayName, email } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const positionRef = useRef(null);
  const { signOut } = firebase;

  const togglePopup = () => setOpen((prevOpen) => !prevOpen);
  const hidePopup = () => setOpen(false);

  return (
    <React.Fragment>
      <button
        ref={positionRef}
        className="w-10 h-10 leading-10 text-2xl uppercase text-gray-100 bg-strong-purple hover:bg-purple-800 rounded-full text-center transition duration-200 ease-in"
        onClick={togglePopup}
      >
        {displayName[0]}
      </button>
      <FadePopup
        id="profile-card"
        show={open}
        hide={hidePopup}
        parent={positionRef.current}
        classes="bg-gray-100 rounded shadow-lg z-10 p-4 border"
      >
        <p className="text-2xl">{displayName}</p>
        <p className="mt-2 text-gray-500">{email}</p>
        <button
          className="mt-6 -ml-2 p-2 rounded transition-colors duration-200 ease-in text-gray-700 uppercase tracking-wide text-sm font-semibold hover:bg-gray-200"
          onClick={signOut}
        >
          Sign Out
        </button>
      </FadePopup>
    </React.Fragment>
  );
};

export default Profile;
