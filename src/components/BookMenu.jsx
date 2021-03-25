import React, { useState, useRef } from 'react';
import FadePopup from './FadePopup';

const BookMenu = ({
  book,
  switchReadStatus,
  switchBoughtStatus,
  handleEdit,
  handleDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prevOpen) => !prevOpen);
  const hideMenu = () => setMenuOpen(false);

  // hide menu after menu link is clicked
  // use when building out menu items later
  const hideMenuAfterClick = (fn) => {
    hideMenu();
    // add some delay to allow menu to hide before adjusting options
    setTimeout(fn, 150);
  };

  return (
    <div className="relative">
      <button
        ref={menuRef}
        onClick={toggleMenu}
        className="w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ease-in hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>
      <FadePopup
        id={`book-${book.id}`}
        show={menuOpen}
        hide={hideMenu}
        parent={menuRef.current}
        classes="w-48 bg-gray-100 rounded shadow-lg z-10 border"
      >
        <ul>
          <li className="transition-colors duration-200 ease-in hover:bg-gray-200">
            <button
              onClick={() => hideMenuAfterClick(switchReadStatus)}
              className="px-4 py-2 w-full text-left"
            >
              Mark As {book.isRead ? 'Unread' : 'Read'}
            </button>
          </li>
          <li className="transition-colors duration-200 ease-in hover:bg-gray-200">
            <button
              onClick={() => hideMenuAfterClick(switchBoughtStatus)}
              className="px-4 py-2 w-full text-left"
            >
              Mark As {book.isBought ? 'Not Bought' : 'Bought'}
            </button>
          </li>
          <li className="transition-colors duration-200 ease-in hover:bg-gray-200">
            <button
              onClick={() => hideMenuAfterClick(handleEdit)}
              className="px-4 py-2 w-full text-left"
            >
              Edit Book
            </button>
          </li>
          <li className="transition-colors duration-200 ease-in hover:bg-gray-200">
            <button
              onClick={() => hideMenuAfterClick(handleDelete)}
              className="px-4 py-2 w-full text-left"
            >
              Delete Book
            </button>
          </li>
        </ul>
      </FadePopup>
    </div>
  );
};

export default BookMenu;
