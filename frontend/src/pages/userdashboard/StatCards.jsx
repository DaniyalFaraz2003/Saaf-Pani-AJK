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

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        value="149" 
        label="Total Areas" 
        bgColor="bg-yellow-400" 
        iconColor="bg-blue-600"
      />
      <StatCard 
        value="6000" 
        label="Water Sources" 
        bgColor="bg-blue-400" 
        iconColor="bg-blue-600"
      />
      <StatCard 
        value="4789" 
        label="Safe Sources" 
        bgColor="bg-green-500" 
        iconColor="bg-purple-600"
      />
      <MonthProgress />
    </div>
  );
};

export default StatCards;