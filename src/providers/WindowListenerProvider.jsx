import React, { useState, useEffect, useRef, createContext } from 'react';

export const WindowListenerContext = createContext({
  addCallback: null,
  removeCallback: null,
});

const WindowListenerProvider = ({ children }) => {
  const [callbacks, setCallbacks] = useState([]);
  const stateRef = useRef(null);

  // store callbacks in a state Ref object to allow us to access
  // the current callbacks array in the click handler. Using
  // the click handler does not have visibility of current state
  // without this.
  useEffect(() => {
    stateRef.current = callbacks;
  });

  useEffect(() => {
    const clickHandler = (e) => {
      stateRef.current.forEach(({ action }) => action(e));
    };
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
      setCallbacks([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addCallback = (callback) => {
    setCallbacks((prevCallbacks) => [...prevCallbacks, callback]);
  };

  const removeCallback = (id) => {
    setCallbacks((prevCallbacks) => prevCallbacks.filter((cb) => cb.id !== id));
  };

  return (
    <WindowListenerContext.Provider value={{ addCallback, removeCallback }}>
      {children}
    </WindowListenerContext.Provider>
  );
};

export default WindowListenerProvider;
