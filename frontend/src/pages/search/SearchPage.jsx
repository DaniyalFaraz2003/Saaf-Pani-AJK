import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";
import "./search.css";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard");
        const cities = [...new Set(response.data.allData.phComparisonData.map(item => item.city))];
        setCitySuggestions(cities);
      } catch (err) {
        console.error("Error fetching cities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(`http://localhost:5000/api/water-sources/city/${encodeURIComponent(searchTerm)}`);
      const waterSources = response.data.data;
      
      if (waterSources.length > 0) {
        const firstSource = waterSources[0];
        const route = firstSource.isSafeForDrinking ? 
          `/resultsuccess/${firstSource._id}` : 
          `/resultunsuccess/${firstSource._id}`;
        
        navigate(route);
      } else {
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

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21ebfed71eaef71b205a7d0591c97ce5367e482a?placeholderIfAbsent=true"
            alt="Logo"
            className="search-logo"
          />
          <form onSubmit={handleSearchSubmit} className="search-input-container relative">
            <Search size={20} className="search-icon text-gray-400" />
            <input 
              className="flex-1" 
              type="text" 
              placeholder="Search by city..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {showSuggestions && (
              <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
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
        <div className="back-button" onClick={handleBack}>
          BACK
        </div>
        <div className="illustration-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/702a4c1ddabe9b947c735029b16ec81e97c614df?placeholderIfAbsent=true"
            alt="Main illustration"
            className="search-illustration"
          />
        </div>
      </div>
      <div className="search-footer"></div>
    </div>
  );
};

export default SearchPage;