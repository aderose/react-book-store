import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import { LogoContainer, Text } from '../style';

const Logo = () => {
  library.add(faBookOpen);
  return (
    <LogoContainer>
      <Text margin="0 0.2em">Book</Text>
      <FontAwesomeIcon icon="book-open" />
      <Text margin="0 0.2em">Store</Text>
    </LogoContainer>
  );
};

export default Logo;
