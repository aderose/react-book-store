import React, { useState, useContext, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import { StyledProfileCard, ProfileIcon } from '../styles';
import { UserContext } from '../providers/UserProvider';

const Profile = ({ firebase }) => {
  const { displayName, email } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { signOut } = firebase;

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    // if click occurs on anchor, prevent rapid open & close
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ProfileIcon type="button" ref={anchorRef} onClick={handleToggle}>
        {displayName[0].toUpperCase()}
      </ProfileIcon>
      <Popper open={open} anchorEl={anchorRef.current} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box>
              <ClickAwayListener onClickAway={handleClose}>
                <StyledProfileCard elevation={5}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {displayName}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={signOut}>Sign Out</Button>
                  </CardActions>
                </StyledProfileCard>
              </ClickAwayListener>
            </Box>
          </Fade>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default Profile;
