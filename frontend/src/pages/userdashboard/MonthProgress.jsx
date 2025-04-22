import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'TESTED', value: 70, color: '#3B82F6' },
  { name: 'PENDING', value: 20, color: '#F59E0B' },
  { name: 'SAFE', value: 10, color: '#10B981' }
];

const MonthProgress = () => {
  return (
    <div className="bg-mint-100 rounded-lg p-6 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-center font-semibold text-gray-800">
          <span className="text-yellow-500">☀</span> Month progress
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
              height={36}
              formatter={(value) => <span className="text-xs uppercase font-medium">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthProgress;