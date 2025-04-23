import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to={"/"}>
      <button 
        className="flex items-center text-blue-800 font-bold hover:text-blue-600 transition-colors duration-200"
        aria-label="Go back"
      >
        <ArrowLeft size={24} className="mr-2" />
        <span className="text-lg uppercase">BACK</span>
      </button>
      </Link>
      
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
  );
};

export default Header;