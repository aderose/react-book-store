/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
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

  // useLayoutEffect over useEffect to avoid flicker
  useLayoutEffect(() => {
    if (shouldRender && parent) {
      const { bottom, right, width } = parent.getBoundingClientRect();
      const { width: popupWidth } = popupRef.current.getBoundingClientRect();
      popupRef.current.setAttribute(
        'style',
        `top: ${bottom}px; left: ${right - popupWidth - width / 2}px`,
      );
    }
  });

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
        className={`absolute ${
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
