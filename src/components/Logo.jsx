import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Logo = ({ color }) => {
  return (
    <MenuBookIcon
      style={{
        fontSize: '100px',
        color: color,
      }}
    />
  );
};

export default Logo;
