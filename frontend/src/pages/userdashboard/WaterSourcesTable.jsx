import React from 'react';



const waterSources = [
  { id: 1, location: 'Nalochi', isSafe: false, area: 'Muzaffarabad', type: 'Spring' },
  { id: 2, location: 'Kundal Shahi', isSafe: true, area: 'Neelum', type: 'Filtration plant' },
  { id: 3, location: 'Dhirkot', isSafe: true, area: 'Bagh', type: 'Spring' },
  { id: 4, location: 'Abbaspur', isSafe: false, area: 'Rawalakot', type: 'Borewell' },
];

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

const WaterSourcesTable = () => {
  return (
    <div className="bg-lavender-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-lavender-200">
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Location</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Safe?</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Area</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Type</th>
            </tr>
          </thead>
          <tbody>
            {waterSources.map((source) => (
              <tr 
                key={source.id} 
                className="border-t border-lavender-200 hover:bg-lavender-50 transition-colors duration-150"
              >
                <td className="py-3 px-4 font-medium">{source.location}</td>
                <td className="py-3 px-4"><SafetyBadge isSafe={source.isSafe} /></td>
                <td className="py-3 px-4">{source.area}</td>
                <td className="py-3 px-4">{source.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaterSourcesTable;