// PHChart.jsx
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

const PHChart = ({ phComparisonData }) => {
  // Transform the data for the chart
  const chartData = phComparisonData.map(city => {
    // Calculate safe and unsafe counts based on pH values
    // pH 5-7 is considered safe
    const safeCount = city.safeCount || 0;
    const unsafeCount = city.count - safeCount;
    
    return {
      city: city.city,
      safe: safeCount,
      unsafe: unsafeCount
    };
  });

  return (
    <div className="h-[200px] mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="city"
            tick={{ fontSize: 10 }}
            interval={0}
            height={20}
          />
          <YAxis
            tick={{ fontSize: 10 }}
            width={20}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              fontSize: '12px'
            }}
            formatter={(value, name) => {
              if (name === 'safe') return [`Safe: ${value}`, 'Safe (pH 5-7)'];
              if (name === 'unsafe') return [`Unsafe: ${value}`, 'Unsafe (pH <5 or >7)'];
              return [value, name];
            }}
          />
          <Bar
            dataKey="unsafe"
            stackId="a"
            fill="#EF4444"
            radius={[2, 2, 0, 0]}
            name="Unsafe"
          />
          <Bar
            dataKey="safe"
            stackId="a"
            fill="#3B82F6"
            radius={[2, 2, 0, 0]}
            name="Safe"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PHChart;