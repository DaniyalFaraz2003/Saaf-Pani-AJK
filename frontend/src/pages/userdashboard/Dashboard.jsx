// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import StatCards from './StatCards';
import WaterSourcesTable from './WaterSourcesTable';
import Charts from './Charts';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {


        const response = await axios.get("http://localhost:5000/api/dashboard");
        
        setDashboardData(response.data.allData);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-8 text-center">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-8 text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-8 text-center">No dashboard data available</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Header />
      
      <div className="mt-8">
        <h1 className="text-center text-4xl font-bold text-blue-900 bg-blue-100 py-4 rounded-full w-64 mx-auto mb-8 transition-all duration-300 hover:shadow-md">
          DASHBOARD
        </h1>
      </div>
      
      <StatCards 
        totals={dashboardData.totals}
        safeSourcesByCity={dashboardData.safeSourcesByCity}
      />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WaterSourcesTable 
          recentSources={dashboardData.recentSources} 
        />
        <Charts 
          phComparisonData={dashboardData.phComparisonData}
        />
      </div>
    </div>
  );
};

export default Dashboard;