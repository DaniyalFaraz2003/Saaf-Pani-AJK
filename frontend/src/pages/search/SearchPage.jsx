import React from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const SearchPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
          <div className="search-input-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a85d150a78ee250f02f931987eb721a491e7f403?placeholderIfAbsent=true"
              alt="Search icon"
              className="search-icon"
            />
            <input className="flex-1" type="text" placeholder="Search"/>
          </div>
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
