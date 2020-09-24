import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ReactEcharts from 'echarts-for-react';
import './dushboard.css';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 140
  }
}));
function getOption() {
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      containLabel: true
    },
    xAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true
      },
      type: 'category',
      boundaryGap: false,
      data: [
        'Янв 20',
        'Янв 21',
        'Янв 22',
        'Янв 23',
        'Янв 24',
        'Янв 25',
        'Янв 26',
        'Янв 27',
        'Янв 28'
      ]
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true
      },
      type: 'value',
      axisLabel: {
        show: true,
        formatter: '$ {value}'
      },
      min: 'dataMin',
      max: 'dataMax'
    },
    series: [
      {
        name: '$',
        type: 'line',
        data: [120, 127, 139, 141, 135, 140, 138, 145, 143],
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: '#ffffff',
          borderColor: '#4F5F6F',
          borderWidth: 2
        },
        lineStyle: {
          color: '#02a0df'
        },
        areaStyle: {
          color: new ReactEcharts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#1996c7'
            },
            {
              offset: 0.25,
              color: '#1996c7'
            },
            {
              offset: 1,
              color: '#ffffff'
            }
          ])
        }
      }
    ]
  };
  return options;
}

export default function Chart() {
  const classes = useStyles();

  let state = {
    date: new Date()
  };
  const onChange = date => state.dateFrom;
  const onChangeS = date => state.dateTo;
  return (
    <React.Fragment>
      <div className="chart-head">
        <span className="chart-header">продажи за период</span>
        <div className="chart-date">
          <TextField
            onChange={onChange}
            id="date"
            type="date"
            className={classes.textField}
          />
          <span className="head-to">to</span>
          <TextField
            onChange={onChangeS}
            id="date"
            type="date"
            className={classes.textField}
          />
        </div>
      </div>
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
      />
    </React.Fragment>
  );
}
