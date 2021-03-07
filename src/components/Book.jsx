import React, { useState, useRef } from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckIcon from '@material-ui/icons/Check';
import BookIcon from '@material-ui/icons/Book';

import {
  BoughtChip,
  PriceChip,
  ReadChip,
  StyledCard,
  StyledCardHeader,
  StyledCardContent,
} from '../styles';

const Book = ({ book }) => {
  const [isRead, setIsRead] = useState(book.isRead);
  const [isBought, setIsBought] = useState(book.isBought);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // if click occurs on anchor, prevent rapid open & close
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setMenuOpen(false);
  };

  const switchReadStatus = (event) => {
    setIsRead((prevRead) => !prevRead);
    handleClose(event);
  };

  const switchBoughtStatus = (event) => {
    setIsBought((prevBought) => !prevBought);
    handleClose(event);
  };

  const handleEdit = (event) => {
    handleClose(event);
  };

  const handleDelete = (event) => {
    handleClose(event);
  };

  return (
    <StyledCard elevation={16}>
      <StyledCardHeader
        action={
          <IconButton ref={anchorRef} onClick={handleToggle}>
            <MoreVertIcon />
          </IconButton>
        }
        subheader={book.author}
      />
      <Popper open={menuOpen} anchorEl={anchorRef.current} transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleEdit}>Edit Book</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete Book</MenuItem>
                  <MenuItem onClick={switchBoughtStatus}>
                    Mark as {isBought ? 'Not Bought' : 'Bought'}
                  </MenuItem>
                  <MenuItem onClick={switchReadStatus}>
                    Mark As {isRead ? 'Unread' : 'Read'}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <StyledCardContent>
        <Typography variant="body1" gutterBottom>
          {book.title}
        </Typography>
        {book.price && (
          <PriceChip
            avatar={
              <Avatar>
                <AttachMoneyIcon fontSize="small" />
              </Avatar>
            }
            label={book.price}
          />
        )}
        {isRead && (
          <ReadChip
            avatar={
              <Avatar>
                <CheckIcon fontSize="small" />
              </Avatar>
            }
            label="Read"
          />
        )}
        {isBought && (
          <BoughtChip
            avatar={
              <Avatar>
                <BookIcon fontSize="small" />
              </Avatar>
            }
            label="Bought"
          />
        )}
      </StyledCardContent>
    </StyledCard>
  );
};

export default Book;
