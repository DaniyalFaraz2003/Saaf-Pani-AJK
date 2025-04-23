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
    <div className="h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="city"
            tick={{ fontSize: 12 }}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0'
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
            radius={[4, 4, 0, 0]}
            name="Unsafe"
          />
          <Bar
            dataKey="safe"
            stackId="a"
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
            name="Safe"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PHChart;