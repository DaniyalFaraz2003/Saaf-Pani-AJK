// MonthProgress.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const MonthProgress = ({ safeSources, totalSources }) => {
  const unsafeSources = totalSources - safeSources;
  const testedPercentage = Math.round((safeSources / totalSources) * 100);
  
  const data = [
    { name: 'SAFE', value: safeSources, color: '#10B981' },
    { name: 'UNSAFE', value: unsafeSources, color: '#EF4444' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-center font-semibold text-gray-800">
          Water Safety
        </h3>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={2}
              formatter={(value) => <span className="text-xs uppercase font-medium">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthProgress;