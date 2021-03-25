import React from 'react';

import Logo from './Logo';

const Login = ({ firebase }) => {
  const { signInWithGoogle } = firebase;

  return (
    <div className="mt-24 mx-auto border-black py-8 px-4 w-4/5 max-w-sm bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <Logo color="text-strong-purple" size="w-40" />
      <h1 className="mt-4 text-4xl text-center">Book Store</h1>
      <p className="mt-4 text-center text-lg text-gray-600">
        Sign in using a Google account to get quick access to your book store.
      </p>
      <button
        className="mt-4 text-gray-50 bg-strong-purple px-4 py-2 text-sm font-medium uppercase tracking-wide rounded hover:bg-purple-800 transition duration-300 ease-in"
        onClick={signInWithGoogle}
      >
        Proceed With Google
      </button>
    </div>
  );
};

export default Login;
