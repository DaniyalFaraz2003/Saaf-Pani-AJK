import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UpdateSource() {
    const [isSafeToDrink, setIsSafeToDrink] = useState(true);
    
      const toggleSafeToDrink = () => {
        setIsSafeToDrink(!isSafeToDrink);
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
                        UPDATE SOURCE
                    </div>

                    {/* Logout Button */}
                    <div className="flex items-center">
                        <Link to="/adminlogin" className="flex flex-col items-center">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c749ad8132c69a40e98c1ef72e64804eaed1ed?placeholderIfAbsent=true"
                                alt="Logout"
                                className="w-16 h-16 object-contain"
                            />
                            <span className="mt-2 text-xl">LOGOUT</span>
                        </Link>
                    </div>
                </div>

                {/* Main Form Section */}
                <div className="bg-[rgba(189,229,255,1)] rounded-3xl w-full max-w-5xl p-8 mb-8">
                    <div className="space-y-6">
                        {/* City Selection */}
                        <div className="flex items-center gap-4">
 
                            <div className="flex-1">
                                <div className="text-2xl text-black mb-2">CITY NAME</div>
                                <select className="w-full bg-white rounded-lg p-3 text-xl outline-none">
                                    <option value="">Select City</option>
                                    <option value="city1">City 1</option>
                                    <option value="city2">City 2</option>
                                    <option value="city3">City 3</option>
                                </select>
                            </div>
                        </div>

                        {/* Tehsil/Location and Source Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Tehsil/Location Name */}
                            <div>
                                <div className="text-xl text-black mb-1">Tehsil/Location Name</div>
                                <select className="w-full bg-white rounded-lg p-3 text-xl outline-none">
                                    <option value="">Select Location</option>
                                    <option value="location1">Location 1</option>
                                    <option value="location2">Location 2</option>
                                    <option value="location3">Location 3</option>
                                </select>
                            </div>

                            {/* Source Type */}
                            <div>
                                <div className="text-xl text-black mb-1">Source type</div>
                                <select className="w-full bg-white rounded-lg p-3 text-xl outline-none">
                                    <option value="">Select Source Type</option>
                                    <option value="well">Well</option>
                                    <option value="river">River</option>
                                    <option value="lake">Lake</option>
                                    <option value="tap">Tap Water</option>
                                </select>
                            </div>
                        </div>

                        {/* Date of Test and Last Test Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Date of Test */}
                            <div>
                                <div className="text-xl text-black mb-1">Date of Test</div>
                                <input
                                    type="date"
                                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                                />
                            </div>

                            {/* Last Test Date */}
                            <div>
                                <div className="text-xl text-black mb-1">Last Test Date:</div>
                                <input
                                    type="date"
                                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
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
                                    placeholder="Enter TDS value"
                                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                                />
                            </div>

                            {/* pH Value */}
                            <div>
                                <div className="text-xl text-black mb-1">pH Value</div>
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="14"
                                    placeholder="Enter pH value"
                                    className="w-full bg-white rounded-lg p-3 text-xl outline-none"
                                />
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <div className="text-xl text-black mb-1">Additional Info</div>
                            <textarea
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
                                    className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${isSafeToDrink ? "bg-green-500" : "bg-red-500"}`}
                                    onClick={toggleSafeToDrink}
                                >
                                    <div
                                        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isSafeToDrink ? "left-8" : "left-1"
                                            }`}
                                        style={{ transform: `translateX(${isSafeToDrink ? 'calc(100% - 1.5rem)' : '0'}` }}
                                    />
                                </div>
                            </div>

                            {/* Submit button */}
                            <button className="bg-[rgba(17,66,167,1)] rounded-lg px-8 py-3 text-xl text-white font-semibold hover:bg-blue-700 transition-colors">
                                UPDATE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}

            </div>
            <div className="bg-[rgba(0,170,202,1)] w-full h-12 mt-auto" />
        </>
    );
}