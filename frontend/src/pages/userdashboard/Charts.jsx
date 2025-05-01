// Charts.jsx
import React from 'react';
import PHChart from './PHChart';

const Charts = ({ phComparisonData }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">Water Safety by City</h3>
        <button className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18.4 9.4L8.4 19.4"></path>
            <path d="m10.8 6.8 2.8 2.8 5.4-5.4"></path>
          </svg>
        </button>
      </div>
      
      <PHChart phComparisonData={phComparisonData} />
    </div>
  );
};

export default Charts;