import React from "react";
import clsx from "clsx";
import base from "./admin-log/config";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import avaImg from "../img/avatar.png";
import d_search from "../img/d_search.png";
import SimpleMenu from "./simplyMenu";
import GoodsList from "./goods/GoodsList";
import Analytics from "./dushboard";
import { NavLink, Route, Switch } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import BarChartIcon from "@material-ui/icons/BarChart";
import BallotIcon from "@material-ui/icons/Ballot";
import AddGoods from "./goods/AddGoods";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const clickHandler = (e) => {
  e.preventDefault();
};

function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"©"}
      <Link color='inherit' onClick={clickHandler}>
        All Rights Reserved
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#303d50",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "#ffffff",
    width: 100 + "%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "#35b8eb",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  drowIcon: {
    color: "#ffffff",
  },
  modal: {
    minWidth: 100 + "%",
    position: "absolute",
    zIndex: 10000,
  },
}));

const Admin = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let { modal, error, alert } = props;
  const { status, type, title, color, message } = modal;
  const handleLogout = async (e) => {
    try {
      await base.auth().singOut();
    } catch (err) {
      alert({
        ...error,
        status: true,
        message: err,
      });
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Collapse className={classes.modal} in={status}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                alert({
                  ...modal,
                  status: false,
                });
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          <AlertTitle>{title}</AlertTitle>
          <strong style={{ color: color }}>{message}</strong>
        </Alert>
      </Collapse>
      <div className={classes.root}>
        <AppBar
          position='absolute'
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge='start'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              className={classes.title}
            >
              <div className='d-search for'>
                <button className='dush-search-btn'>
                  <img src={d_search} alt='search icon' />
                </button>
                <input
                  className='dush-search'
                  placeholder='Поиск...'
                  type='text'
                  name='search'
                  role='search'
                />
              </div>
              <div className='dush-menu for'>
                <div className='dush-avatar for'>
                  <img className='avatar-img' src={avaImg} alt='avatar img' />
                  <SimpleMenu />
                </div>
                <NavLink className='nav_text' to='/' onClick={handleLogout}>
                  <button className='dush-exit'>Выход</button>
                </NavLink>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <span className='h-dush dush-header'>Dash</span>
            <span className='h-board dush-header'>Board</span>
            <IconButton
              className={clsx(classes.drowIcon)}
              onClick={handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <NavLink exact to='/admin-cs30'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <span style={{ color: "#58606D" }}>
                  <ListItemText primary='Аналитика' />
                </span>
              </ListItem>
            </NavLink>
            <NavLink exact to='/sales'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <span style={{ color: "#58606D" }}>
                  <ListItemText primary='Продажи' />
                </span>
              </ListItem>
            </NavLink>
            <NavLink exact to='/finance'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <span style={{ color: "#58606D" }}>
                  <ListItemText primary='Финансы' />
                </span>
              </ListItem>
            </NavLink>
            <NavLink exact to='/admin-cs30/goods&list'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <span style={{ color: "#58606D" }}>
                  <ListItemText primary='Товары' />
                </span>
              </ListItem>
            </NavLink>
            <NavLink exact to='/news'>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  <BallotIcon />
                </ListItemIcon>
                <span style={{ color: "#58606D" }}>
                  <ListItemText primary='Новости' />
                </span>
              </ListItem>
            </NavLink>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            <Switch>
              <Route exact path='/' component={Analytics} />
              <Route exact path='/sales' component={GoodsList} />
              <Route exact path='/finance' component={GoodsList} />
              <Route exact path='/goods&list' component={GoodsList} />
              <Route exact path='/news' component={GoodsList} />
              <Route exact path='/goods&list/add_goods' component={AddGoods} />
            </Switch>
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    modal: state.AddGoodsReducer.modal,
    waning: state.AddGoodsReducer.warning,
    error: state.AddGoodsReducer.error,
    success: state.AddGoodsReducer.success,
    info: state.AddGoodsReducer.info,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      alert: (payload) => {
        return { type: "WARNING_ALERT", payload: payload };
      },
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
