import React from 'react';
import Link from '@material-ui/core/Link';
import ReChart from './ReChart';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import shape2 from "../img/Shape_2.png";
import { makeStyles } from '@material-ui/core/styles';
import "./dushboard.css";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  btn: {
    color: '#889BA7',
    textTransform: 'none',
    fontSize: 10,
  },
  img: {
    margin: 5,
    width: 8,
  }
}));

export default function Deposits() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div className="chart-header chart-head">
        прибыль
        <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Эта неделя<img className={classes.img} src={shape2} alt="mini_icon"/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Предыдущая неделя</MenuItem>
          <MenuItem onClick={handleClose}>Следующая неделя</MenuItem>
        </Menu>
      </div>
      <div className='rechart-header'>
        <span className="header-sum">$506700 <br/><div className="sum-descriptionA">всего</div></span>
        <span className="header-sum">$45000 <br/><div className="sum-descriptionB">чистая</div></span>
      </div>
      <ReChart/>
      <div className="seeMore">
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}