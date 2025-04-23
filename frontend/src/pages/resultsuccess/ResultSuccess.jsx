import React from 'react';
import { ArrowLeft, Search, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchResultSuccess = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  }
  
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
          NALOCHI
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
                <div className="bg-white rounded-md p-3 shadow-sm">MUZAFFARABAD</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">Location</label>
                <div className="bg-white rounded-md p-3 shadow-sm">Nalochi</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">Date of Test</label>
                <div className="bg-white rounded-md p-3 shadow-sm">20 March 2025</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">TDS</label>
                <div className="bg-white rounded-md p-3 shadow-sm">200 ppm</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-600">Source type</label>
                <div className="bg-white rounded-md p-3 shadow-sm">Filtration Plant</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">Last Test Date</label>
                <div className="bg-white rounded-md p-3 shadow-sm">20 May 2025</div>
              </div>
              <div>
                <label className="text-sm text-blue-600">pH Value</label>
                <div className="bg-white rounded-md p-3 shadow-sm">7.5</div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6">
            <label className="text-sm text-blue-600">Additional Info</label>
            <div className="bg-white rounded-md p-4 shadow-sm mt-1 text-green-600">
              Water quality is excellent.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultSuccess;