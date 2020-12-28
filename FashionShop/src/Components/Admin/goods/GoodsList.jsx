import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    textTransform: 'none'
  }
}));

export default function GoodsList(props) {
  // const orders = props.orders;
  const classes = useStyles();
  //  const	[ history ] = useContext(dushboard)
  return (
    <Grid container>
      <Grid className={classes.header} item xs={12}>
        <span className="chart-header chart-head">List of all products</span>
        <Button className={classes.btn} variant="contained" color="secondary">
          <NavLink
            style={{ color: '#ffffff' }}
            to="/admin-cs30/goods&list/add_goods"
          >
            Add Goods
          </NavLink>
        </Button>
      </Grid>
      {/* {this.orders.map((item, index) => {
        return (
          <Grid item xs={12}>
            <Paper>
							<Grid item xs={4}> <img  className="panel-cart" src={item.img} alt={item.name} /></Grid>
							<Grid item xs={8}>
								<div><NavLink className="panel-cost-text tipical" to={"/admin-cs30/goods&list/{item.category + item.id}"}>{item.name}</NavLink></div>
							</Grid>
						</Paper>
          </Grid>
         );
      })} */}
    </Grid>
  );
}
