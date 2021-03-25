import React from 'react';
import BookMenu from './BookMenu';
import Chip from './Chip';

const Book = ({ book, updateBookProperty, showForm, removeBook }) => {
  return (
    <article className="m-3 p-4 w-56 bg-gray-100 rounded shadow-lg">
      <div className="flex justify-between items-center">
        <p className="italic text-gray-500">{book.author}</p>
        <BookMenu
          book={book}
          switchReadStatus={() =>
            updateBookProperty(book.id, 'isRead', !book.isRead)
          }
          switchBoughtStatus={() =>
            updateBookProperty(book.id, 'isBought', !book.isBought)
          }
          handleEdit={() => showForm()}
          handleDelete={() => removeBook(book.id)}
        />
      </div>
      <h1 className="mt-2 font-semibold text-lg">{book.title}</h1>
      <div className="mt-2 flex flex-wrap">
        {book.price && (
          <Chip content={book.price} classes="mt-1 bg-strong-purple" />
        )}
        {book.isRead && (
          <Chip content="Read" classes="mt-1 ml-1 bg-green-800" />
        )}
        {book.isBought && (
          <Chip content="Bought" classes="mt-1 ml-1 bg-blue-700" />
        )}
      </div>
    </article>
  );
};

export default Book;
