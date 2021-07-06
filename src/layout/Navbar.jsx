import React from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  makeStyles,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link as RouteLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button component={RouteLink} to="/adm" color="inherit">
          Adm
        </Button>
      </MenuItem>
      <MenuItem>
        <Button component={RouteLink} to="/coa" color="inherit">
          Coa
        </Button>
      </MenuItem>
      <MenuItem>
        <Button component={RouteLink} to="/ad1" color="inherit">
          Ad1
        </Button>
      </MenuItem>
      <MenuItem>
        <Button component={RouteLink} to="/pme" color="inherit">
          Pme
        </Button>
      </MenuItem>
      <MenuItem>
        <Button component={RouteLink} to="/csw2" color="inherit">
          Csw2
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouteLink}
            to="/"
            color="inherit"
            style={{ textDecoration: 'none' }}
            noWrap
          >
            Semster 4
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button component={RouteLink} to="/adm" color="inherit">
              Adm
            </Button>
            <Button component={RouteLink} to="/coa" color="inherit">
              Coa
            </Button>
            <Button component={RouteLink} to="/ad1" color="inherit">
              Ad1
            </Button>
            <Button component={RouteLink} to="/pme" color="inherit">
              Pme
            </Button>
            <Button component={RouteLink} to="/csw2" color="inherit">
              Csw2
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
