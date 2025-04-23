import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SearchResultSuccess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [waterSource, setWaterSource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWaterSource = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/water-sources/${id}`);
        setWaterSource(response.data.waterSource);
      } catch (err) {
        setError("Failed to load water source data. Please try again later.");
        console.error("Error fetching water source:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWaterSource();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">Loading water source data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  if (!waterSource) {
    return (
      <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">No water source data available</div>
        </div>
      </div>
    );
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={handleBack}
            className="flex items-center text-blue-800 font-bold hover:text-blue-600 transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeft size={24} className="mr-2" />
            <span className="text-lg uppercase">BACK</span>
          </button>
          
          <div className="relative w-full max-w-md ml-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-4xl font-bold text-blue-900 bg-blue-100 py-4 rounded-full w-64 mx-auto mb-8">
          {waterSource.location.toUpperCase()}
        </h1>

        {/* Result Card */}
        <div className="bg-blue-100/50 rounded-3xl p-8 shadow-lg">
          {/* Status Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-500 rounded-full p-6 inline-flex items-center justify-center">
              <CheckCircle size={48} className="text-white" />
              <div className="absolute mt-30 text-green-500 font-bold">SAFE</div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-600">CITY</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{waterSource.city}</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">Location</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{waterSource.location}</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">Date of Test</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{formatDate(waterSource.dateOfTest)}</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">TDS</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{waterSource.TDS} ppm</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-600">Source type</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{waterSource.sourceType}</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">Last Test Date</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{formatDate(waterSource.lastTestDate)}</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">pH Value</label>
                <div className="bg-white rounded-md p-3 shadow-sm">{waterSource.phValue}</div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6">
            <label className="text-sm text-blue-600">Additional Info</label>
            <div className={`bg-white rounded-md p-4 shadow-sm mt-1 ${
              waterSource.isSafeForDrinking ? 'text-green-600' : 'text-red-600'
            }`}>
              {waterSource.additionalInfo || 'No additional information available'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultSuccess;