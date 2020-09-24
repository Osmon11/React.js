import React, { Component } from 'react';
import clsx from 'clsx';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import SecurityIcon from '@material-ui/icons/Security';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BusinessIcon from '@material-ui/icons/Business';
import BookIcon from '@material-ui/icons/Book';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import logo from './img/logo.svg';
import Private from './img/card-private-cloud.svg';
import Public from './img/card-public-cloud.svg';
import hybrid from './img/card-hybrid-cloud.svg';
import pci_dss from './img/card-pci-dss.svg';
import secure from './img/card-secure-cloud.svg';
import sap_hosting from './img/card-sap-hosting.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  appBar: {
    backgroundColor: '#ffffff',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navBar: {
    marginTop: 80,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  burger: {
    color: '#1976D2',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

class App extends Component {
  componentWillMount() {
    this.setState({ display: 'block' });
  }
  componentDidMount() {
    setTimeout(() => {
      return this.setState({
        display: 'none',
      });
    }, 3000);
  }
  render() {
    let style = {
      minWidth: '100%',
      display: this.state.display,
      position: 'fixed',
      zIndex: 10000,
      top: 0,
      left: 0,
    };
    return (
      <Container maxWidth="md">
        <div style={style}>
          <LinearProgress style={{ maxHeight: 2 }} color="secondary" />
        </div>
        <Router>
          <Route exact path="/" component={PublicPage} />
        </Router>
      </Container>
    );
  }
}

export default App;

const PublicPage = () => {
  let classes = useStyles();
  let icons = [Private, Public, hybrid, pci_dss, secure, sap_hosting];
  return (
    <>
      <Header />
      <Grid container spacing={2} className={classes.navBar}>
        {icons.map((item, index) => {
          return (
            <Grid item xs={4} key={item + index}>
              <Paper>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item}
                      style={{ backgroundSize: 'auto' }}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        align="center"
                        variant="h5"
                        component="h2"
                      >
                        Lizard
                      </Typography>
                      {/* <Typography variant="body2" color="textSecondary" component="p">
												Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
												across all continents except Antarctica
          </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
										<Button size="small" color="primary">
											Share
        </Button>
										<Button size="small" color="primary">
											Learn More
        </Button>
									</CardActions> */}
                </Card>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id="res-header">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <div className="logo-icon">
              <img className="it-grad-logo" alt="it-grad-logo" src={logo} />
            </div>
          </Typography>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide, classes.burger)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
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
          <ListItem button>
            <ListItemIcon>
              <FilterDramaIcon />
            </ListItemIcon>
            <ListItemText>Облако</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText>Безопасность и сети</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText>Отрасли</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText>Компания</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText>Блог</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};
