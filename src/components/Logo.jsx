import React from 'react';

import FontAwesomeIcon from '../fontAwesome';

import { LogoContainer, Text } from '../style';

const Logo = () => {
  return (
    <LogoContainer>
      <Text margin="0 0.2em 0 0">book</Text>
      <FontAwesomeIcon icon="book-open" />
      <Text margin="0 0 0 0.2em">store</Text>
    </LogoContainer>
  );
};

export default Logo;
