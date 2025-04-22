import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

const ReportForm = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
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
          REPORT
        </h1>

        {/* Form Card */}
        <div className="bg-blue-100/50 rounded-3xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Name?
                </label>
                <input
                  type="text"
                  className="bg-white w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Right Column */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Area?
                </label>
                <input
                  type="text"
                  className="bg-white w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter area name"
                />
              </div>
            </div>

            {/* Full Width Fields */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">
                Location?
              </label>
              <input
                type="text"
                className="bg-white w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter location details"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">
                Complaint?
              </label>
              <textarea
                className="bg-white w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                placeholder="Describe your complaint"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 
                         transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;