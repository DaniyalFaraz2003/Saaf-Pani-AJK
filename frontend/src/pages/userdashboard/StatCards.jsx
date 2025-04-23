// StatCards.jsx
import React from 'react';
import MonthProgress from './MonthProgress';

const StatCard = ({ value, label, bgColor, iconColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105`}>
      <div className="flex justify-center mb-2">
        <div className={`h-1.5 w-12 rounded-full ${iconColor}`}></div>
      </div>
      <h2 className="text-5xl font-bold text-center text-white mb-2">{value}</h2>
      <p className="text-center text-white font-medium">{label}</p>
    </div>
  );
};

const StatCards = ({ totals, safeSourcesByCity }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        value={totals.locations} 
        label="Total Areas" 
        bgColor="bg-yellow-400" 
        iconColor="bg-blue-600"
      />
      <StatCard 
        value={totals.sources} 
        label="Water Sources" 
        bgColor="bg-blue-400" 
        iconColor="bg-blue-600"
      />
      <StatCard 
        value={totals.safeSources} 
        label="Safe Sources" 
        bgColor="bg-green-500" 
        iconColor="bg-purple-600"
      />
      <MonthProgress 
        safeSources={totals.safeSources}
        totalSources={totals.sources}
      />
    </div>
  );
};

export default StatCards;