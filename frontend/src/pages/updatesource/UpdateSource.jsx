import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateSource() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    city: "",
    location: "",
    sourceType: "",
    dateOfTest: "",
    lastTestDate: "",
    TDS: "",
    phValue: "",
    additionalInfo: "",
    isSafeForDrinking: true
  });
  
  // Dropdown data
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [sourceTypes, setSourceTypes] = useState([]);
  
  // UI state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Check authentication
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("adminUser"));
    if (!user) {
      navigate("/adminlogin");
    }
  }, [navigate]);

  // Fetch source data and dropdown options
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch the source to update
        const sourceResponse = await axios.get(`http://localhost:5000/api/water-sources/${id}`);
        const sourceData = sourceResponse.data.waterSource;
        
        // Fetch cities
        const citiesResponse = await axios.get("http://localhost:5000/api/cities");
        setCities(citiesResponse.data.data || []);
        
        // Fetch source types
        const typesResponse = await axios.get("http://localhost:5000/api/cities/source-types");
        setSourceTypes(typesResponse.data.sourceTypes);
        
        // Set form data
        setFormData({
          city: sourceData.city,
          location: sourceData.location,
          sourceType: sourceData.sourceType,
          dateOfTest: sourceData.dateOfTest.split('T')[0], // Format date for input
          lastTestDate: sourceData.lastTestDate.split('T')[0],
          TDS: sourceData.TDS,
          phValue: sourceData.phValue,
          additionalInfo: sourceData.additionalInfo,
          isSafeForDrinking: sourceData.isSafeForDrinking
        });
        
        // Fetch locations for the source's city
        const encodedCity = encodeURIComponent(sourceData.city);
        const locationsResponse = await axios.get(
          `http://localhost:5000/api/cities/${encodedCity}/locations`
        );
        setLocations(locationsResponse.data.data);
        
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Fetch locations when city changes
  useEffect(() => {
    const fetchLocations = async () => {
      if (!formData.city) {
        setLocations([]);
        return;
      }

      try {
        const encodedCity = encodeURIComponent(formData.city);
        const response = await axios.get(
          `http://localhost:5000/api/cities/${encodedCity}/locations`
        );
        setLocations(response.data.data);
      } catch (err) {
        setError("Failed to load locations. Please try again.");
      }
    };

    fetchLocations();
  }, [formData.city]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleSafeToDrink = () => {
    setFormData(prev => ({
      ...prev,
      isSafeForDrinking: !prev.isSafeForDrinking
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try {
      const user = JSON.parse(localStorage.getItem("adminUser"));
      if (!user) {
        throw new Error("Authentication required");
      }

      const payload = {
        ...formData,
        TDS: Number(formData.TDS),
        phValue: Number(formData.phValue)
      };

      await axios.put(
        `http://localhost:5000/api/water-sources/${id}`, payload);

      setSuccess("Water source updated successfully!");
      setTimeout(() => navigate(-1), 1500);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Failed to update water source. Please try again."
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[rgba(255,252,239,1)] flex items-center justify-center">
        <div className="text-2xl">Loading source data...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[rgba(255,252,239,1)]">
      <main className="flex-1 flex flex-col items-center p-3">
        {/* Header Section */}
        <div className="w-full max-w-6xl flex items-center justify-between mb-3">
          {/* Back Button */}
          <div className="flex items-center">
            <Link to="/adminhome" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ab6d26989ee924ee4fcb10c92c56b4b0e0a3fc?placeholderIfAbsent=true"
                alt="Back"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="ml-1 text-lg md:text-xl text-[rgba(17,66,167,1)]">BACK</span>
            </Link>
          </div>
  
          {/* Page Title */}
          <div className="bg-[rgba(214,237,255,1)] rounded-full px-4 py-2 text-xl md:text-2xl text-[rgba(14,58,147,1)] font-semibold">
            UPDATE SOURCE
          </div>
  
          {/* Logout Button */}
          <div className="flex items-center">
            <div 
              onClick={() => {
                localStorage.removeItem("adminUser");
                navigate("/adminlogin");
              }} 
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c749ad8132c69a40e98c1ef72e64804eaed1ed?placeholderIfAbsent=true"
                alt="Logout"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="text-sm md:text-base">LOGOUT</span>
            </div>
          </div>
        </div>
  
        {/* Main Form Section */}
        <div className="bg-[rgba(189,229,255,1)] rounded-2xl w-full max-w-5xl p-4 mb-3">
          {/* Success and Error Messages */}
          {error && (
            <div className="mb-2 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-2 p-2 bg-green-100 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}
  
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              {/* City Selection */}
              <div>
                <div className="text-lg md:text-xl text-black mb-1">CITY NAME</div>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-white rounded-lg p-2 text-base outline-none"
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.city}>
                      {city.city}
                    </option>
                  ))}
                </select>
              </div>
  
              {/* Tehsil/Location and Source Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Tehsil/Location Name */}
                <div>
                  <div className="text-base md:text-lg text-black mb-1">Tehsil/Location Name</div>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-2 text-base outline-none"
                    required
                  >
                    <option value="">Select Location</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
  
                {/* Source Type */}
                <div>
                  <div className="text-base md:text-lg text-black mb-1">Source type</div>
                  <select
                    name="sourceType"
                    value={formData.sourceType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-2 text-base outline-none"
                    required
                  >
                    <option value="">Select Source Type</option>
                    {sourceTypes.map((type, index) => (
                      <option key={index} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
  
              {/* Date of Test and Last Test Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Date of Test */}
                <div>
                  <div className="text-base md:text-lg text-black mb-1">Date of Test</div>
                  <input
                    type="date"
                    name="dateOfTest"
                    value={formData.dateOfTest}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-2 text-base outline-none"
                    required
                  />
                </div>
  
                {/* Last Test Date */}
                <div>
                  <div className="text-base md:text-lg text-black mb-1">Last Test Date:</div>
                  <input
                    type="date"
                    name="lastTestDate"
                    value={formData.lastTestDate}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-2 text-base outline-none"
                    required
                  />
                </div>
              </div>
  
              {/* TDS and pH Value */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* TDS */}
                <div>
                  <div className="text-base md:text-lg text-black mb-1">TDS</div>
                  <input
                    type="number"
                    name="TDS"
                    value={formData.TDS}
                    onChange={handleChange}
                    placeholder="Enter TDS value"
                    className="w-full bg-white rounded-lg p-2 text-base outline-none"
                    required
                  />
                </div>
  
                {/* pH Value */}
                <div>
                  <div className="text-base md:text-lg text-black mb-1">pH Value</div>
                  <input
                    type="number"
                    name="phValue"
                    value={formData.phValue}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    max="14"
                    placeholder="Enter pH value"
                    className="w-full bg-white rounded-lg p-2 text-base outline-none"
                    required
                  />
                </div>
              </div>
  
              {/* Additional Info */}
              <div>
                <div className="text-base md:text-lg text-black mb-1">Additional Info</div>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Enter additional information"
                  className="w-full bg-white rounded-lg p-2 text-base outline-none h-12 resize-none"
                />
              </div>
  
              {/* Safe for drinking toggle and Submit button */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-2 gap-2">
                {/* Safe for drinking toggle */}
                <div className="flex items-center gap-2">
                  <div className="text-base md:text-lg text-black">Safe for drinking?</div>
                  <div
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
                      formData.isSafeForDrinking ? "bg-green-500" : "bg-red-500"
                    }`}
                    onClick={toggleSafeToDrink}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                        formData.isSafeForDrinking ? "left-7" : "left-1"
                      }`}
                    />
                  </div>
                </div>
  
                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-[rgba(17,66,167,1)] rounded-lg px-6 py-2 text-base md:text-lg text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="mt-auto">
        <div className="bg-[rgba(0,170,202,1)] w-full h-8 md:h-10" />
      </footer>
    </div>
  );
}