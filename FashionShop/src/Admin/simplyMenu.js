import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import mini from "../img/d_mini.png";
import "./dushboard.css";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    color: '#596771',
    textTransform: 'none',
  },
  img: {
    margin: 5,
  }
}));
export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sdush-menu">
      <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        John Doe<img className={classes.img} src={mini} alt="mini_icon"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}><NavLink className="nav_text" to="/singup-master">Add new account</NavLink></MenuItem>
      </Menu>
    </div>
  );
}