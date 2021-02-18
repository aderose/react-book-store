import React, { useState } from 'react';

import FontAwesomeIcon from '../fontAwesome';

import { ProfileContainer, Image, FlexibleText, LogoContainer } from '../style';

import { signOut } from '../firebase';

const Profile = ({ name, iconSrc }) => {
  const [isLogout, setIsLogout] = useState(false);

  const handleClick = () => {
    if (isLogout) signOut();
    setIsLogout(true);
  };

  return (
    <ProfileContainer onClick={handleClick}>
      {!isLogout ? (
        <Image src={iconSrc} alt="User Icon" />
      ) : (
        <LogoContainer>
          <FontAwesomeIcon icon="sign-out-alt" />
        </LogoContainer>
      )}
      <FlexibleText margin="0 0 0 0.5em" size="1.25em">
        {!isLogout ? name : 'Logout'}
      </FlexibleText>
    </ProfileContainer>
  );
};

export default Profile;
