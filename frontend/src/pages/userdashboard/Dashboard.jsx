// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import StatCards from './StatCards';
import WaterSourcesTable from './WaterSourcesTable';
import Charts from './Charts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard");
        setDashboardData(response.data.allData);
        
        // Extract unique cities for search suggestions
        const cities = [...new Set(response.data.allData.phComparisonData.map(item => item.city))];
        setCitySuggestions(cities);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      // Find the first water source for the searched city
      const response = await axios.get(`http://localhost:5000/api/water-sources/city/${encodeURIComponent(searchTerm)}`);
      const waterSources = response.data.data;
      
      if (waterSources.length > 0) {
        const firstSource = waterSources[0];
        const route = firstSource.isSafeForDrinking ? 
          `/resultsuccess/${firstSource._id}` : 
          `/resultunsuccess/${firstSource._id}`;
        
        navigate(route);
      } else {
        // Handle case when no sources found for the city
        alert(`No water sources found for ${searchTerm}`);
      }
    } catch (err) {
      console.error("Error searching for city:", err);
      alert("Error searching for city. Please try again.");
    }
  };

  const handleSuggestionClick = (city) => {
    setSearchTerm(city);
    setShowSuggestions(false);
  };

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
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
      {/* Modified Header with search functionality */}
      <div className="flex items-center justify-between">
        <Link to={"/"} className="flex items-center text-blue-800 font-bold hover:text-blue-600 transition-colors duration-200">
          <ArrowLeft size={24} className="mr-2" />
          <span className="text-lg uppercase">BACK</span>
        </Link>
        
        <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md ml-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by city..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {showSuggestions && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
              {citySuggestions
                .filter(city => 
                  city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((city, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                    onClick={() => handleSuggestionClick(city)}
                  >
                    {city}
                  </div>
                ))}
            </div>
          )}
        </form>
      </div>
      
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