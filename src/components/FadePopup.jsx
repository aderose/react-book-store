/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect, useRef } from 'react';
import { WindowListenerContext } from '../providers/WindowListenerProvider';

const FadePopup = ({ id, show, hide, parent, classes, children }) => {
  const [shouldRender, setRender] = useState(show);
  const popupRef = useRef(null);
  const { addCallback, removeCallback } = useContext(WindowListenerContext);

  const hidePopup = (event) => {
    // prevent double toggle when parent is click
    if (parent && parent.contains(event.target)) {
      return;
    }
    // if click is on popup, do nothing
    if (popupRef.current && popupRef.current.contains(event.target)) {
      return;
    }
    hide();
  };

  useEffect(() => {
    if (show) {
      setRender(true);
      addCallback({ id, action: hidePopup });
    } else {
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setRender(false);
      removeCallback(id);
    }
  };

  return (
    shouldRender && (
      <div
        ref={popupRef}
        className={`absolute right-0 ${
          show ? 'animate-fade-in' : 'animate-fade-out'
        } ${classes}`}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadePopup;
