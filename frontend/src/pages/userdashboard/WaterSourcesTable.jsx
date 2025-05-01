// WaterSourcesTable.jsx
import React from 'react';

const SafetyBadge = ({ isSafe }) => {
  return isSafe ? (
    <span className="bg-green-500 text-white text-xs font-medium px-2 py-px rounded-full inline-block">
      YES
    </span>
  ) : (
    <span className="bg-red-500 text-white text-xs font-medium px-2 py-px rounded-full inline-block">
      NO
    </span>
  );
};

const WaterSourcesTable = ({ recentSources }) => {
  // Limit to 5 recent sources for compact display
  const limitedSources = recentSources.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-lavender-200">
              <th className="py-2 px-3 text-left text-xs font-semibold text-gray-700">Location</th>
              <th className="py-2 px-3 text-left text-xs font-semibold text-gray-700">Safe?</th>
              <th className="py-2 px-3 text-left text-xs font-semibold text-gray-700">City</th>
              <th className="py-2 px-3 text-left text-xs font-semibold text-gray-700">Type</th>
            </tr>
          </thead>
          <tbody>
            {limitedSources.map((source) => (
              <tr 
                key={source._id} 
                className="border-t border-lavender-200 hover:bg-lavender-50 transition-colors duration-150"
              >
                <td className="py-1 px-3 text-xs font-medium">{source.location}</td>
                <td className="py-1 px-3">
                  <SafetyBadge isSafe={source.isSafeForDrinking} />
                </td>
                <td className="py-1 px-3 text-xs">{source.city}</td>
                <td className="py-1 px-3 text-xs">{source.sourceType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaterSourcesTable;