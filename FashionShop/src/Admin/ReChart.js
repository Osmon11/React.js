import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, Tooltip, } from 'recharts';
import './dushboard.css';

const data = [
  {
    a: 4000, b: 2400, date: 20,
  },
  {
    a: 3000, b: 1398, date: 21,
  },
  {
    a: 2000, b: 5000, date: 22,
  },
  {
    a: 2780, b: 3908, date: 23,
  },
  {
    a: 1890, b: 4800, date: 24,
  },
  {
    a: 2390, b: 3800, date: 25,
  },
  {
    a: 3490, b: 4300, date: 26,
  },
];
const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <span className="total">{`${label} (Total: $${total})`}</span>
      <ul className="list">
        {
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} className="tooltip-item" style={{ color: '#EA0E19' }}>
            	{entry.name}: ${entry.value}(<span style={{ color: '#12EA1A' }}>{getPercent(entry.value, total)}</span>)
           </li>
        	))
        }
      </ul>
    </div>
  );
};

export default class ReChart extends PureComponent {
  render() {
    return (
      <AreaChart
        width={190}
        height={300}
        data={data}
      >
        <XAxis dataKey="date"/>
        <Tooltip content={renderTooltipContent} />
        <Area type="monotone" dataKey="a" stackId="1" stroke="#7ACCED" fill="#00ACF0" />
        <Area type="monotone" dataKey="b" stackId="1" stroke="#DFE6EB" fill="#D3D3D3" />
      </AreaChart>
    );
  }
}
