import React from "react";
import clsx from "clsx";
import "./res.css";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { showBasket } from "../Header/header";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from "@material-ui/icons/Category";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
import ContactsIcon from "@material-ui/icons/Contacts";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../img/Store.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/intsagram.png";
import youtube from "../img/youtube.png";
import Box from "@material-ui/core/Box";
import { Button, Menu, MenuItem } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  burger: {
    color: "#1976D2",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

let inputValue = React.createRef();
function searchGoods(e) {
  e.preventDefault();
  let ePersist = e.target;
  if (inputValue.current.value.length > 0) {
    console.log(inputValue.carent.value);
  } else {
    ePersist.closest(".search").classList.add("error");
    setTimeout(() => {
      ePersist.closest(".search").classList.remove("error");
    }, 2000);
  }
}

const ResHeader = React.memo(() => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const icons = [
    <HomeIcon />,
    <ShopIcon />,
    <FeaturedPlayListIcon />,
    <GroupIcon />,
    <InfoIcon />,
    <BookIcon />,
    <ContactsIcon />,
  ];
  const toPath = [
    "/login",
    "/shop",
    "/features",
    "/mega-group",
    "/about",
    "/blog",
    "contact",
  ];
  const listText = [
    "Home",
    "Shop",
    "Features",
    "Mega Group",
    "About",
    "Blog",
    "Contact",
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id='res-header'>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant='h6' noWrap className={classes.title}>
            <div className='res-roof_search'>
              <img className='res-nav_logo' alt='fashion_logo' src={logo} />
            </div>
          </Typography>
          <IconButton
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide, classes.burger)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Box component='form' className='search'>
              <div className='search-wrapper'>
                <input
                  ref={inputValue}
                  id='res-searchGoods'
                  className='search-wrapper_input'
                  placeholder='Search'
                  type='text'
                  aria-label='Поиск товаров'
                  role='search'
                />
              </div>
              <div className='search-wrap-btn'>
                <button
                  onClick={searchGoods}
                  className='search-btn'
                  id='res-search-btn'
                  aria-label='Поиск товаров'
                ></button>
              </div>
            </Box>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={showBasket}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Shopping Cart (0)</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>
              <Button
                className={classes.sellectButton}
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
              >
                Categories
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>For men</MenuItem>
                <MenuItem onClick={handleClose}>For women</MenuItem>
                <MenuItem onClick={handleClose}>For kids</MenuItem>
              </Menu>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <span className='res-n_icon'>
              <img src={facebook} alt='facebook icon' />
            </span>
            <span className='res-n_icon'>
              <img src={twitter} alt='twitter icon' />
            </span>
            <span className='res-n_icon'>
              <img src={instagram} alt='instagram icon' />
            </span>
            <span className='res-n_icon'>
              <img src={youtube} alt='youtube icon' />
            </span>
          </ListItem>
        </List>
        <Divider />
        {icons.map((item, index) => {
          return (
            <List key={index}>
              <ListItem button>
                <ListItemIcon>{item}</ListItemIcon>
                <ListItemText>
                  <NavLink className='nav_text res-nav' to={toPath[index]}>
                    {listText[index]}
                  </NavLink>
                </ListItemText>
              </ListItem>
            </List>
          );
        })}
      </Drawer>
    </div>
  );
});

export default ResHeader;
