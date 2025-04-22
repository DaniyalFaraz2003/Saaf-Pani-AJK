import React from 'react';
import Header from './Header';
import StatCards from './StatCards';
import WaterSourcesTable from './WaterSourcesTable';
import Charts from './Charts';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Header />
      
      <div className="mt-8">
        <h1 className="text-center text-4xl font-bold text-blue-900 bg-blue-100 py-4 rounded-full w-64 mx-auto mb-8 transition-all duration-300 hover:shadow-md">
          DASHBOARD
        </h1>
      </div>
      
      <StatCards />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WaterSourcesTable />
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;