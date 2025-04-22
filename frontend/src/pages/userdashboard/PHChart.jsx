import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const phData = [
  { month: 'APRIL', safe: 5.5, unsafe: 2.0 },
  { month: 'JUNE\'24', safe: 5.0, unsafe: 3.0 },
  { month: 'JAN\'24', safe: 6.0, unsafe: 2.5 },
  { month: 'JUNE\'23', safe: 5.0, unsafe: 1.0 },
  { month: 'JAN\'23', safe: 4.5, unsafe: 3.0 },
  { month: 'JUNE\'22', safe: 5.0, unsafe: 3.0 }
];

const PHChart = () => {
  return (
    <div className="h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={phData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            interval={0}
          />
          <YAxis
            domain={[0, 9.5]}
            ticks={[5.5, 6.5, 7.5, 8.5, 9.5]}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0'
            }}
          />
          <Bar
            dataKey="unsafe"
            stackId="a"
            fill="#EF4444"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="safe"
            stackId="a"
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PHChart;