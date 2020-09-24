import React from 'react';
import Chart from "./Chart";
import Deposits from "./Deposits";
import Goods from "./goods/Goods";
import SpacingGrid from "./dush-info";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  chart: {
    height: "100%",
  },
  fixedHeight: {
    height: "100%",
  },
}));

export default function Dushboard ( props ) {
	 const classes = styles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
    <Grid container spacing={3}>
      {/* Info */}
      <Grid item xs={12}>
        <SpacingGrid />
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={clsx(classes.chart)}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={4} sm={4} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={8} sm={8}>
        <Paper className={classes.paper}>
          <Goods />
        </Paper>
      </Grid>
    </Grid>
  );	
};
