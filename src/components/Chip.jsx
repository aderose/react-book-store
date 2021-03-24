import React from 'react';

const Chip = ({ content, classes }) => {
  return (
    <div
      className={`${classes} rounded-full py-0.5 px-2 text-gray-100 flex items-center w-max`}
    >
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Chip;
