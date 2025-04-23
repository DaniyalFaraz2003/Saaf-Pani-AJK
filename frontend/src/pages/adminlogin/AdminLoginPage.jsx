import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLoginPage() {
  const adminUser = JSON.parse(localStorage.getItem("adminUser"));
  if (adminUser) {
    window.location.href = "/adminhome";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call your login API endpoint
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username: email, // Using email as username (or adjust based on your API)
        password
      });

      // Store user data in localStorage
      localStorage.setItem("adminUser", JSON.stringify({
        username: response.data.user.username
      }));

      // Redirect to admin dashboard
      navigate("/adminhome");
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Login failed. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[rgba(255,252,239,1)] pt-[53px] overflow-hidden min-h-screen">
      <div className="flex flex-col items-center px-4 w-full max-w-[1765px] mx-auto">
        <div className="w-full flex justify-between items-start">
          <Link to={"/"}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a4d978fd94ad1ada7643f8b13136154595b103?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-square object-contain object-center w-[50px] self-start flex-shrink-0"
            />
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto items-center mb-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78df5564c44eae6f631abc9ef121dd0111dd349?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
            alt="Water drop icon"
            className="h-20 w-20 ml-46 object-contain mt-10 mb-4 rounded-full aspect-square"
          />
          <h1 className="text-3xl font-bold text-center mb-8 text-[rgba(0,170,202,1)]">
            Admin Login
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(0,170,202,0.5)] focus:border-[rgba(0,170,202,1)]"
                  placeholder="Enter admin username"
                  required
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-[rgba(0,170,202,1)] hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(0,170,202,0.5)] focus:border-[rgba(0,170,202,1)]"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[rgba(0,170,202,1)] text-white py-3 rounded-lg font-medium hover:bg-[rgba(0,150,180,1)] transition-colors duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(0,170,202,1)] w-full">
        <div className="bg-[rgba(0,170,202,1)] flex min-h-[61px] w-full"></div>
      </div>
    </div>
  );
}

export default AdminLoginPage;