import React, { useState } from 'react';
import TextField from './TextField';
import SwitchField from './SwitchField';
import useBooksManager from '../hooks/useBooksManager';

const BookForm = ({ firebase, hideForm, defaults }) => {
  const [values, setValues] = useState({
    author: defaults?.author || '',
    title: defaults?.title || '',
    price: defaults?.price || '',
    isRead: defaults?.isRead || false,
    isBought: defaults?.isBought || false,
  });
  const [errors, setErrors] = useState({});
  const { addBook, updateBook } = useBooksManager(firebase);

  const regexConfig = {
    author: { regex: /^[\w'"&.,-/\\ ]+$/, message: 'Must be a valid name' },
    title: { regex: /^[\w'":&.,-/\\ ]+$/, message: 'Must be a valid title' },
    price: { regex: /^£?\d+(\.\d{2})?$/, message: 'Must be a valid price' },
  };

  const setFieldValue = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const validateTextField = (field, optionalValue) => {
    const value = optionalValue || values[field];
    const { regex, message } = regexConfig[field];
    setErrors((prevErrors) => {
      let error = '';
      if (!value) error = 'Required';
      else if (!regex.test(value)) error = message;

      return {
        ...prevErrors,
        [field]: error,
      };
    });
  };

  const validateAllTextFields = () => {
    const tempErrors = {};
    const { author, title, price } = regexConfig;
    if (!values.author) tempErrors.author = 'Required';
    else if (!author.regex.test(values.author)) {
      tempErrors.author = author.message;
    }

    if (!values.title) tempErrors.title = 'Required';
    else if (!title.regex.test(values.title)) {
      tempErrors.title = title.message;
    }

    if (!values.price) tempErrors.price = 'Required';
    else if (!price.regex.test(values.price)) {
      tempErrors.price = price.message;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAllTextFields()) return;
    const { author, title, price, isRead, isBought } = values;
    const updatedPrice =
      (/£/.test(price) ? '' : '£') + price + (/\./.test(price) ? '' : '.00');
    if (defaults === undefined) {
      // we are adding a book, await to ensure form is hidden after book is added
      await addBook(author, title, updatedPrice, isRead, isBought);
    } else {
      // we are updating a book
      await updateBook({
        id: defaults.id,
        author,
        title,
        price: updatedPrice,
        isRead,
        isBought,
      });
    }
    hideForm();
  };

  return (
    <div className="mt-8 bg-gray-100 w-4/5 max-w-sm min-w-xs rounded shadow-lg overflow-hidden">
      <h1 className="bg-strong-purple text-gray-100 text-2xl p-4">
        {defaults === undefined ? 'Add New' : 'Edit'} Book
      </h1>
      <form
        action="/"
        onSubmit={handleSubmit}
        onReset={hideForm}
        noValidate
        className="flex flex-col px-4 pb-4 pt-1"
      >
        <TextField
          name="author"
          label="Author *"
          value={values.author}
          setValue={setFieldValue}
          error={errors.author}
          validate={(value) => validateTextField('author', value)}
          isActive={defaults !== undefined}
        />
        {/* {errors.author && touched.author && <div>{errors.author}</div>} */}
        <TextField
          name="title"
          label="Title *"
          value={values.title}
          setValue={setFieldValue}
          error={errors.title}
          validate={(value) => validateTextField('title', value)}
          isActive={defaults !== undefined}
        />
        {/* {errors.title && touched.title && <div>{errors.title}</div>} */}
        <TextField
          name="price"
          label="Price (£) *"
          value={values.price}
          setValue={setFieldValue}
          error={errors.price}
          validate={(value) => validateTextField('price', value)}
          isActive={defaults !== undefined}
        />
        {/* {errors.price && touched.price && <div>{errors.price}</div>} */}
        <SwitchField
          name="isBought"
          label="Do you own this book?"
          value={values.isBought}
          setValue={setFieldValue}
        />
        <SwitchField
          name="isRead"
          label="Have you read it?"
          value={values.isRead}
          setValue={setFieldValue}
        />
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <button
            type="reset"
            className="mt-3 px-4 py-2 rounded border-2 border-strong-purple text-strong-purple uppercase tracking-wide hover:bg-purple-200 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-3 px-4 py-2 bg-strong-purple text-gray-100 rounded uppercase tracking-wide hover:bg-purple-800 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
