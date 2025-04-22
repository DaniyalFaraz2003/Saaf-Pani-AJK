import React from 'react';
import PHChart from './PHChart';

const Charts = () => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">pH Trend</h3>
        <button className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18.4 9.4L8.4 19.4"></path>
            <path d="m10.8 6.8 2.8 2.8 5.4-5.4"></path>
          </svg>
        </button>
      </div>
      
      <PHChart />
    </div>
  );
};

export default Charts;