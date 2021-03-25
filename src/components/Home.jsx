import React, { useState } from 'react';
import WindowListenerProvider from '../providers/WindowListenerProvider';
import BookForm from './BookForm';
import BookList from './BookList';
import NavBar from './NavBar';

const Home = ({ firebase }) => {
  const [formActive, setFormActive] = useState(false);
  const [defaults, setDefaults] = useState(undefined);
  const { userInitialised } = firebase;

  const toggleForm = () => {
    setFormActive((prevStatus) => !prevStatus);
  };

  const toggleEditForm = (book) => () => {
    setDefaults(book);
    toggleForm();
  };

  const hideForm = () => {
    setDefaults(undefined);
    toggleForm();
  };

  return (
    <WindowListenerProvider>
      <NavBar firebase={firebase} />
      <div className="mt-4 w-11/12 max-w-3xl mx-auto flex justify-center flex-wrap">
        {formActive ? (
          <BookForm
            firebase={firebase}
            hideForm={hideForm}
            defaults={defaults}
          />
        ) : (
          <React.Fragment>
            <button
              onClick={toggleForm}
              className="w-56 m-3 text-xl uppercase tracking-wide border-dashed border-4 rounded text-purple-300 border-purple-300 transition-colors duration-200 ease-in hover:bg-black hover:bg-opacity-10"
            >
              + Add Book
            </button>
            {userInitialised && (
              <BookList firebase={firebase} toggleEditForm={toggleEditForm} />
            )}
          </React.Fragment>
        )}
      </div>
    </WindowListenerProvider>
  );
};

export default Home;
