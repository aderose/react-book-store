import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';

export const cssVariables = {
  primary: '#3f2b96',
  secondary: '#766f8f',
  tertiary: '#2c1e69',
  dark: '#333',
  light: '#efefef',
};

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          color: cssVariables.primary,
          backgroundColor: cssVariables.secondary,
          backgroundImage:
            'linear-gradient(-180deg, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)',
          backgroundBlendMode: 'soft-light',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
});

export const Logo = withStyles({
  root: {
    color: cssVariables.primary,
    fontSize: (props) => props.size,
    margin: (props) => props.margin,
  },
})(MenuBookIcon);

// Login Page

export const LoginCard = withStyles({
  root: {
    width: '80%',
    maxWidth: 350,
    margin: '8em auto 0 auto',
  },
})(Card);

export const LoginCardContent = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})(CardContent);

export const LoginButton = withStyles({
  root: {
    backgroundColor: cssVariables.primary,
    padding: '0.5em 1em',
    '&:hover': {
      backgroundColor: cssVariables.tertiary,
    },
  },
  label: {
    color: theme.palette.getContrastText(cssVariables.primary),
  },
})(Button);

// Home Page

export const Nav = withStyles({
  root: {
    color: cssVariables.primary,
    backgroundColor: cssVariables.light,
  },
})(AppBar);

export const Title = withStyles({
  root: {
    userSelect: 'none',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
})(Typography);

export const ProfileIcon = withStyles({
  root: {
    cursor: 'pointer',
    color: theme.palette.getContrastText(cssVariables.primary),
    backgroundColor: cssVariables.primary,
    marginLeft: 'auto',
    position: 'relative',
    '&:hover': {
      backgroundColor: cssVariables.tertiary,
    },
  },
})(Avatar);

export const StyledProfileCard = withStyles({
  root: {
    backgroundColor: cssVariables.light,
    position: 'absolute',
    bottom: '-150px',
    right: 0,
    zIndex: 2,
  },
})(Card);

// List & Book card styling

export const TransparentPaper = withStyles({
  root: {
    backgroundColor: 'transparent',
    borderTop: '2px solid rgba(255,255,255,0.2)',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    paddingTop: 25,
    justifyContent: 'center',
  },
})(Paper);

export const StyledCard = withStyles({
  root: {
    margin: 10,
    width: '100%',
    maxWidth: 350,
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
})(Card);

export const DummyCard = withStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: `3px dashed rgba(255, 255, 255, 0.3)`,
    color: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    margin: 10,
    width: '100%',
    maxWidth: 350,
    userSelect: 'none',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },
})(Card);

export const StyledCardHeader = withStyles({
  root: {
    paddingBottom: 0,
  },
  subheader: {
    fontStyle: 'italic',
  },
})(CardHeader);

export const StyledCardContent = withStyles({
  root: {
    paddingTop: 0,
  },
})(CardContent);

export const PriceChip = withStyles({
  root: {
    backgroundColor: cssVariables.primary,
    '& div': {
      backgroundColor: cssVariables.tertiary,
      '& svg': {
        color: theme.palette.getContrastText(cssVariables.primary),
      },
    },
    marginRight: 5,
    marginBottom: 2,
  },
  label: {
    color: theme.palette.getContrastText(cssVariables.primary),
    fontSize: 14,
  },
})(Chip);

export const ReadChip = withStyles({
  root: {
    backgroundColor: '#1b5e20',
    '& div': {
      backgroundColor: '#003300',
      '& svg': {
        color: '#ffffff',
      },
    },
    marginRight: 5,
    marginBottom: 2,
  },
  label: {
    color: '#ffffff',
    fontSize: 14,
  },
})(Chip);

export const BoughtChip = withStyles({
  root: {
    backgroundColor: '#1875d1',
    '& div': {
      backgroundColor: '#004a9f',
      '& svg': {
        color: '#ffffff',
      },
    },
    marginRight: 5,
    marginBottom: 2,
  },
  label: {
    color: '#ffffff',
    fontSize: 14,
  },
})(Chip);

// Form styling

export const FormContainer = withStyles({
  root: {
    backgroundColor: cssVariables.light,
    width: '80%',
    margin: 'auto',
    marginTop: 50,
    maxWidth: 400,
    minWidth: 200,
    padding: '1em',
    '& form': {
      '& div': {
        width: '100%',
        marginBottom: 10,
      },
    },
  },
})(Paper);

export const ActionButtons = withStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})(Box);

export const FormSubmitButton = withStyles({
  root: {
    backgroundColor: cssVariables.primary,
    border: `2px solid ${cssVariables.primary}`,
    marginBottom: 10,
    '&:hover': {
      backgroundColor: cssVariables.tertiary,
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: 0,
      padding: '0.5em 2em',
    },
  },
  label: {
    color: theme.palette.getContrastText(cssVariables.primary),
  },
})(Button);

export const FormCancelButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    border: `2px solid ${cssVariables.primary}`,
    '&:hover': {
      backgroundColor: '#cdc1f5',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0.5em 2em',
    },
  },
  label: {
    color: cssVariables.primary,
  },
})(Button);
