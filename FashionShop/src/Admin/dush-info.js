import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./dushboard.css";
import expenses from "../img/expenses.png";
import taxes from "../img/taxes.png";
import profit from "../img/profit.png";
import totalAmount from "../img/total_amount.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    width: '140px',
    height: '65px',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}>
                <div className="info-box"><div className="info-img"><img src={expenses} alt="info icon"/></div></div>
                <div className="info-text">
                    <div>$32300</div>
                    <span>Всего затрат</span>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div className="info-box"><div className="info-img"><img src={taxes} alt="info icon"/></div></div>
                <div className="info-text">
                    <div>$16500</div>
                    <span>налоги</span>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div className="info-box"><div className="info-img"><img src={profit} alt="info icon"/></div></div>
                <div className="info-text">
                    <div>$22700</div>
                    <span>Всего прибыль</span>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div className="info-box"><div className="info-img-end"><img src={totalAmount} alt="info icon"/></div></div>
                <div className="info-text">
                    <div>$66400</div>
                    <span>Общая сумма</span>
                </div>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}