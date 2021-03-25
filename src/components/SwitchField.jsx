import React from 'react';

const SwitchField = ({ name, label, value, setValue }) => {
  return (
    <label
      htmlFor={name}
      className="relative my-4 flex items-center cursor-pointer text-gray-500 hover:text-purple-600"
    >
      <span className="mr-auto text-sm md:text-base">{label}</span>
      <span
        className={`relative w-16 h-5 transition-color duration-300 ease-in ${
          value ? 'bg-purple-400' : 'bg-gray-400'
        } rounded-full`}
      >
        <span
          className={`absolute  transition-transform duration-300 ease-in ${
            value ? 'transform translate-x-9' : ''
          } -top-1 w-7 h-7 bg-strong-purple rounded-full shadow`}
        >
          <input
            id={name}
            type="checkbox"
            className="absolute opacity-0 w-0 h-0"
            value={value}
            onChange={(e) => setValue(name, e.target.checked)}
          />
        </span>
      </span>
    </label>
  );
};

export default SwitchField;
