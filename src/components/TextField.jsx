import React, { useState } from 'react';

const TextField = ({
  name,
  label,
  value,
  setValue,
  error,
  validate,
  isActive,
}) => {
  const [active, setActive] = useState(isActive);

  const focusField = () => {
    setActive(true);
  };

  const handleChange = (e) => {
    // only re-run validation if there is an error
    setValue(name, e.target.value);
    if (error) {
      validate(e.target.value);
    }
  };

  const handleBlur = () => {
    // re run validation
    validate();
    if (value !== '') return;
    setActive(false);
  };

  const getLabelFormat = () => {
    if (active) {
      return `text-xs left-0 transform -translate-y-6 ${
        error ? 'text-red-600' : 'text-purple-600'
      }`;
    }
    return `scale-base ${error && 'text-red-600'}`;
  };

  return (
    <div className="relative my-5 py-4">
      <label
        htmlFor={name}
        className={`absolute left-0 top-0 bottom-0 text-gray-500 flex items-center pointer-events-none transition-label ${getLabelFormat()}`}
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        autoComplete="off"
        className={`absolute inset-0 w-full bg-transparent ${
          error
            ? 'pb-0.75 border-b-2 border-red-600'
            : 'pb-1 border-b border-gray-600 hover:pb-0.75 hover:border-b-2 focus:border-purple-600 focus:border-b-2 focus:pb-0.75'
        }`}
        onFocus={focusField}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && (
        <p className="absolute -bottom-5 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};

export default TextField;
