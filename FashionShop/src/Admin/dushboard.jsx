import React from "react";
import Chart from "./Chart";
import ChartDeposits from "./ChartDeposits";
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

export default function Dushboard(props) {
  const classes = styles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SpacingGrid />
      </Grid>
      <Grid item xs={12}>
        <Paper className={clsx(classes.chart)}>
          <ChartDeposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Goods />
        </Paper>
      </Grid>
    </Grid>
  );
}
