import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    location: '',
    complaint: '',
    status: 'pending'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.name || !formData.area || !formData.location || !formData.complaint) {
      setError('Please fill all required fields');
      setLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/reports', formData);
      setSuccess('Report submitted successfully!');
      setFormData({
        name: '',
        area: '',
        location: '',
        complaint: '',
        status: 'pending'
      });
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit report. Please try again later.');
      console.error('Error submitting report:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[rgba(255,252,239,1)] flex flex-col">
      {/* Header with back button and centered search */}
      <header className="w-full p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-blue-800 font-bold hover:text-blue-600 transition-colors">
          <ArrowLeft size={24} className="mr-2" />
          <span className="text-lg uppercase">BACK</span>
        </Link>
        
        
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 w-full max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 bg-blue-100 py-3 px-6 rounded-full mb-6">
          REPORT
        </h1>

        {/* Form Card */}
        <div className="w-full bg-blue-100/50 rounded-2xl p-6 shadow-md">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  Name?
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white w-full p-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  Area?
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="bg-white w-full p-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter area name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-1">
                Location?
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="bg-white w-full p-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter location details"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-1">
                Complaint?
              </label>
              <textarea
                name="complaint"
                value={formData.complaint}
                onChange={handleChange}
                className="bg-white w-full p-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                placeholder="Describe your complaint"
                required
              ></textarea>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800 
                         transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                           loading ? 'opacity-70 cursor-not-allowed' : ''
                         }`}
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer with blue line */}
      <footer className="w-full">
        <div className="w-full bg-cyan-500 h-4"></div>
      </footer>
    </div>
  );
};

export default ReportForm;