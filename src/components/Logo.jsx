import React from 'react';

import FontAwesomeIcon from '../fontAwesome';

import { LogoContainer, Text } from '../style';

const Logo = () => {
  return (
    <LogoContainer>
      <Text margin="0 0.2em 0 0">Book</Text>
      <FontAwesomeIcon icon="book-open" />
      <Text margin="0 0 0 0.2em">Store</Text>
    </LogoContainer>
  );
};

export default Logo;
