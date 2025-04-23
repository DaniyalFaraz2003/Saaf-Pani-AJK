// WaterSourcesTable.jsx
import React from 'react';

const SafetyBadge = ({ isSafe }) => {
  return isSafe ? (
    <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full inline-block">
      YES
    </span>
  ) : (
    <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full inline-block">
      NO
    </span>
  );
};

const WaterSourcesTable = ({ recentSources }) => {
  return (
    <div className="bg-lavender-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-lavender-200">
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Location</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Safe?</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">City</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Type</th>
            </tr>
          </thead>
          <tbody>
            {recentSources.map((source) => (
              <tr 
                key={source._id} 
                className="border-t border-lavender-200 hover:bg-lavender-50 transition-colors duration-150"
              >
                <td className="py-3 px-4 font-medium">{source.location}</td>
                <td className="py-3 px-4">
                  <SafetyBadge isSafe={source.isSafeForDrinking} />
                </td>
                <td className="py-3 px-4">{source.city}</td>
                <td className="py-3 px-4">{source.sourceType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaterSourcesTable;