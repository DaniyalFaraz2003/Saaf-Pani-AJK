import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddSourcePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("adminUser"));
  if (!user) {
    window.location.href = "/adminlogin";
  }
  
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
  const [loadingCities, setLoadingCities] = useState(true);
  const [loadingLocations, setLoadingLocations] = useState(false);
  const [loadingSourceTypes, setLoadingSourceTypes] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch cities on component mount
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cities");
        setCities(response.data.data);
      } catch (err) {
        setError("Failed to load cities. Please try again later.");
      } finally {
        setLoadingCities(false);
      }
    };

    const fetchSourceTypes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cities/source-types");
        setSourceTypes(response.data.sourceTypes);
      } catch (err) {
        setError("Failed to load source types. Please try again later.");
      } finally {
        setLoadingSourceTypes(false);
      }
    };

    fetchCities();
    fetchSourceTypes();
  }, []);

  // Fetch locations when city changes
  useEffect(() => {
    const fetchLocations = async () => {
      if (!formData.city) {
        setLocations([]);
        return;
      }

      try {
        setLoadingLocations(true);
        const encodedCity = encodeURIComponent(formData.city);
        const response = await axios.get(
          `http://localhost:5000/api/cities/${encodedCity}/locations`
        );
        setLocations(response.data.data);
      } catch (err) {
        setError("Failed to load locations. Please try again.");
      } finally {
        setLoadingLocations(false);
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
    setSubmitting(true);

    // Basic validation
    if (!formData.city || !formData.location || !formData.sourceType || 
        !formData.dateOfTest || !formData.lastTestDate || 
        !formData.TDS || !formData.phValue) {
      setError("Please fill all required fields");
      setSubmitting(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        TDS: Number(formData.TDS),
        phValue: Number(formData.phValue)
      };

      const response = await axios.post(
        "http://localhost:5000/api/water-sources",
        payload
      );

      setSuccess("Water source added successfully!");
      // Reset form after successful submission
      setFormData({
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
      
      // Redirect after 2 seconds
      setTimeout(() => navigate("/adminhome"), 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Failed to add water source. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/adminlogin");
  };

  return (
    <>
      <div className="min-h-screen bg-[rgba(255,252,239,1)] flex flex-col items-center py-8 px-4">
        {/* Header Section */}
        <div className="w-full max-w-6xl flex items-center justify-between mb-8">
          {/* Back Button */}
          <div className="flex items-center">
            <Link to="/adminhome" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ab6d26989ee924ee4fcb10c92c56b4b0e0a3fc?placeholderIfAbsent=true"
                alt="Back"
                className="w-16 h-16 object-contain"
              />
              <span className="ml-2 text-2xl text-[rgba(17,66,167,1)]">BACK</span>
            </Link>
          </div>

          {/* Page Title */}
          <div className="bg-[rgba(214,237,255,1)] rounded-full px-8 py-4 text-3xl text-[rgba(14,58,147,1)] font-semibold">
            ADD NEW SOURCE
          </div>

          {/* Logout Button */}
          <div className="flex items-center">
            <div onClick={handleLogout} className="flex flex-col items-center cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c749ad8132c69a40e98c1ef72e64804eaed1ed?placeholderIfAbsent=true"
                alt="Logout"
                className="w-16 h-16 object-contain"
              />
              <span className="mt-2 text-xl">LOGOUT</span>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="bg-[rgba(189,229,255,1)] rounded-3xl w-full max-w-5xl p-8 mb-8">
          {/* Success and Error Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* City Selection */}
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/313e2bdda2a521fb0ca7a897f4fe9b08146542a1?placeholderIfAbsent=true"
                  alt="City Icon"
                  className="w-20 h-20 object-contain rounded-full"
                />
                <div className="flex-1">
                  <div className="text-2xl text-black mb-2">CITY NAME</div>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    disabled={loadingCities}
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city.city} value={city.city}>
                        {city.city}
                      </option>
                    ))}
                  </select>
                  {loadingCities && <div className="text-sm mt-1">Loading cities...</div>}
                </div>
              </div>

              {/* Tehsil/Location and Source Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tehsil/Location Name */}
                <div>
                  <div className="text-xl text-black mb-1">Tehsil/Location Name</div>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    disabled={loadingLocations || !formData.city}
                    required
                  >
                    <option value="">Select Location</option>
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  {loadingLocations && <div className="text-sm mt-1">Loading locations...</div>}
                </div>

                {/* Source Type */}
                <div>
                  <div className="text-xl text-black mb-1">Source type</div>
                  <select
                    name="sourceType"
                    value={formData.sourceType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    disabled={loadingSourceTypes}
                    required
                  >
                    <option value="">Select Source Type</option>
                    {sourceTypes.map(type => (
                      <option key={type._id} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  {loadingSourceTypes && <div className="text-sm mt-1">Loading source types...</div>}
                </div>
              </div>

              {/* Date of Test and Last Test Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date of Test */}
                <div>
                  <div className="text-xl text-black mb-1">Date of Test</div>
                  <input
                    type="date"
                    name="dateOfTest"
                    value={formData.dateOfTest}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    required
                  />
                </div>

                {/* Last Test Date */}
                <div>
                  <div className="text-xl text-black mb-1">Last Test Date:</div>
                  <input
                    type="date"
                    name="lastTestDate"
                    value={formData.lastTestDate}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    required
                  />
                </div>
              </div>

              {/* TDS and pH Value */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TDS */}
                <div>
                  <div className="text-xl text-black mb-1">TDS</div>
                  <input
                    type="number"
                    name="TDS"
                    value={formData.TDS}
                    onChange={handleChange}
                    placeholder="Enter TDS value"
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    required
                  />
                </div>

                {/* pH Value */}
                <div>
                  <div className="text-xl text-black mb-1">pH Value</div>
                  <input
                    type="number"
                    name="phValue"
                    value={formData.phValue}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    max="14"
                    placeholder="Enter pH value"
                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                    required
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <div className="text-xl text-black mb-1">Additional Info</div>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Enter additional information"
                  className="w-full bg-white rounded-lg p-3 text-xl outline-none h-24 resize-none"
                />
              </div>

              {/* Safe for drinking toggle and Submit button */}
              <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
                {/* Safe for drinking toggle */}
                <div className="flex items-center gap-4">
                  <div className="text-xl text-black">Safe for drinking?</div>
                  <div
                    className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                      formData.isSafeForDrinking ? "bg-green-500" : "bg-red-500"
                    }`}
                    onClick={toggleSafeToDrink}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                        formData.isSafeForDrinking ? "left-8" : "left-1"
                      }`}
                      style={{ transform: `translateX(${formData.isSafeForDrinking ? 'calc(100% - 1.5rem)' : '0'}` }}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`bg-[rgba(17,66,167,1)] rounded-lg px-8 py-3 text-xl text-white font-semibold hover:bg-blue-700 transition-colors ${
                    submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[rgba(0,170,202,1)] w-full h-12 mt-auto" />
    </>
  );
}

export default AddSourcePage;